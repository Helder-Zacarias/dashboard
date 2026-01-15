'use client';

import styles from '@/ui/navbar.module.css';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Nav() {
  return(
    <aside className={styles.aside}>
      <Logo />
      <NavLinks/>
      <div className={styles.emptyContainer}></div>
      <Link key={"SignOut"} href={"/"} className={`commonButton ${styles.iconButton}`}>
        <ArrowRightEndOnRectangleIcon className='size-5'/>
        <span>Sign Out</span>
      </Link>
    </aside>
  );
}