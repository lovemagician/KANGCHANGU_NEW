"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  const getLinkStyle = (href: string) => ({
    color: path === href ? "#FDFF86" : "white",
  });

  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbar_list} style={getLinkStyle("/")} href="/">
        HOME
      </Link>
      <Link prefetch className={styles.navbar_list} style={getLinkStyle("/music")} href="/music">
        MUSIC
      </Link>
      <Link prefetch className={styles.navbar_list} style={getLinkStyle("/picture")} href="/picture">
        PICTURE
      </Link>
    </nav>
  );
}
