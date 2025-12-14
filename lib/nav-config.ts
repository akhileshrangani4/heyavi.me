/**
 * Navigation configuration
 * Add new nav items here and they'll automatically appear in the navbar
 */
export type NavItem = {
  name: string;
  path: string;
};

export const navItems: NavItem[] = [
  { name: 'home', path: '/' },
  { name: 'blog', path: '/blog' },
  { name: 'guestbook', path: '/guestbook' },
  { name: 'resume', path: '/resume' },
  { name: 'calendar', path: '/calendar' },
  // Add more nav items here:
  // { name: 'projects', path: '/projects' },
  // { name: 'contact', path: '/contact' },
];
