import Image from "next/image";

import styles from "@/ui/hero.module.css";
import Link from "next/link";
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return(
    <main className={styles.hero}>
      <section className={styles.presentation}>
        <p className={styles.presentationText}><strong>Welcome to Acme.</strong> This is the example for the <span>Next.js Learn Course</span>, brought to you by Vercel.</p>
        <Link key="SignOut" href={'/dashboard'} className={`commonButton bg-blue-500 ${styles.loginButton}`}>
          <span>Log in</span>
          <ArrowRightEndOnRectangleIcon className="size-5"/>
        </Link>
      </section>
      <section className={styles.imageArea}>
        <Image src="/hero-desktop.png" alt="Hero Image" width={1000} height={760}/>
      </section>
      </main>
  );
}