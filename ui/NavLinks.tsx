'use client';

import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/ui/navbar.module.css';
import { usePathname } from 'next/navigation';

const links = [
  {name: 'Home', href: '/dashboard', icon: HomeIcon},
  {name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon},
  {name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon},
];

export default function NavLinks() {
  const pathName = usePathname();

  return(
    links.map((link, key) => {
      const LinkIcon = link.icon;
        return(
          <div>
            <Link key={link.name} href={link.href} className={`commonButton ${styles.iconButton} ${link.href === pathName ? styles.activeIconButton : ''}`}>
              <LinkIcon className='size-5'/>
              <span>{link.name}</span>
            </Link>
          </div>
        );
      })
    );
}