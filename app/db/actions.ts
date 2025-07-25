'use server';

import { auth } from 'app/auth';
import { type Session } from 'next-auth';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { sql } from './postgres';
import { userData } from 'lib/data';

export async function increment(slug: string) {
  noStore();
  await sql`
    INSERT INTO views (slug, count)
    VALUES (${slug}, 1)
    ON CONFLICT (slug)
    DO UPDATE SET count = views.count + 1
  `;
}

async function getSession(): Promise<Session> {
  let session = await auth();
  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }

  return session;
}

export async function saveGuestbookEntry(formData: FormData) {
  let session = await getSession();
  let email = session.user?.email as string;
  let created_by = session.user?.name as string;

  if (!session.user) {
    throw new Error('Unauthorized');
  }

  let entry = formData.get('entry')?.toString() || '';
  let body = entry.slice(0, 500);

  await sql`
    INSERT INTO guestbook (id, email, body, created_by, created_at)
    VALUES (RANDOM()+5000, ${email}, ${body}, ${created_by}, NOW())
  `;

  revalidatePath('/guestbook');

  let data = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_SECRET}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: userData.email,
      to: userData.email,
      subject: 'New Guestbook Entry',
      html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
    }),
  });

  let response = await data.json();
  console.log('Email sent', response);
}

export async function deleteGuestbookEntries(selectedEntries: string[]) {
  let session = await getSession();
  let email = session.user?.email as string;

  if (email !== userData.email) {
    throw new Error('Unauthorized');
  }

  let selectedEntriesAsNumbers = selectedEntries.map(Number);
  let arrayLiteral = `{${selectedEntriesAsNumbers.join(',')}}`;

  await sql`
    DELETE FROM guestbook
    WHERE id = ANY(${arrayLiteral}::int[])
  `;

  revalidatePath('/admin');
  revalidatePath('/guestbook');
}

export async function saveComment(formData: FormData) {
  let session = await getSession();
  let email = session.user?.email as string;
  let created_by = session.user?.name as string;

  if (!session.user) {
    throw new Error('Unauthorized');
  }

  let comment = formData.get('comment')?.toString() || '';
  let body = comment.slice(0, 1000);
  let slug = formData.get('slug')?.toString() || '';

  if (!slug) {
    throw new Error('Blog slug is required');
  }

  await sql`
    INSERT INTO comments (id, blog_slug, email, body, created_by, created_at)
    VALUES (RANDOM()+10000, ${slug}, ${email}, ${body}, ${created_by}, NOW())
  `;

  revalidatePath(`/blog/${slug}`);
}

export async function deleteComment(commentId: string, slug: string) {
  let session = await getSession();
  let email = session.user?.email as string;

  if (email !== userData.email) {
    throw new Error('Unauthorized');
  }

  await sql`
    DELETE FROM comments
    WHERE id = ${commentId}
  `;

  revalidatePath(`/blog/${slug}`);
}
