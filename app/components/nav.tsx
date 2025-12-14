import { navItems } from 'lib/nav-config';
import Link from 'next/link';

export function Navbar() {
  return (
    <aside className="mb-16 md:mb-20">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative overflow-x-auto md:overflow-visible scrollbar-hide"
          id="nav"
        >
          <div className="flex flex-row gap-4 md:gap-8 min-w-max md:min-w-0">
            {navItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                className="text-sm md:text-base text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
