import { auth } from 'app/auth';
import { getGuestbookEntries } from 'app/db/queries';
import { redirect } from 'next/navigation';
import Form from '../components/form';
import { userData } from 'lib/data';

export const metadata = {
  title: 'Admin',
};

export default async function GuestbookPage() {
  let session = await auth();
  if (session?.user?.email !== userData.email) {
    redirect('/');
  }

  let entries = await getGuestbookEntries();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">admin</h1>
      <Form entries={entries} />
    </section>
  );
}
