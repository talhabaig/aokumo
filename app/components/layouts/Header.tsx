"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export const Nav = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white h-[60px]">
      header
      {/* <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : ""
        }`}
        href="/verify"
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/quotes" ? styles.active : ""
        }`}
        href="/quotes"
      >
        Quotes
      </Link> */}
    </header>
  );
};
