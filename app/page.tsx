import Image from "next/image";
import Nav from "@/ui/Nav";
import Main from "@/ui/Dashboard";
import Logo from "@/ui/Logo";

import styles from '@/ui/home.module.css';
import Hero from "@/ui/Hero";

export default function Home() {
  return (
    <div className={styles.home}>
      <Logo />
      <Hero />
    </div>
  );
}
