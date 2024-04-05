"use client";

import {
  CustomizeFillo,
  Language,
  Notification,
  ShareButton,
} from "../ui-icons";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

export const Nav = () => {
  // const pathname = usePathname();

  return (
    <header className="h-[92px] border-b border-[#8d9fb73d]">
      {/* header */}
      {/* <div className="text-[16px] font-semibold text-[#8D9FB7]">header</div> */}

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

      <div className="flex gap-6 justify-end p-5 items-center">
        <div className="flex gap-4">
          <div>
            <Language />
          </div>
          <div>
            <CustomizeFillo />
          </div>

          <div>
            <Notification />
          </div>
        </div>

        <div className="flex items-center  gap-3 text-center text-[18px] font-bold  cursor-pointer  text-white bg-primary-blue   p-[12px_16px] rounded-[16px] border whitespace-nowrap ">
          Share Chat
          <div>
            <ShareButton />
          </div>
        </div>
      </div>
    </header>
  );
};
