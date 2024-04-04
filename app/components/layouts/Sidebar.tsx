"use client";
import { useEffect, useState } from "react";
import ChatSidebar from "../chat/ChatSideBar/ChatSidebar";
import { Dashboard } from "../ui-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  const isChatPage = pathname.startsWith("/chat");

  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(isChatPage);
  }, [pathname]);
  return (
    <div className="flex">
      <div
        className="flex flex-col h-full transition-all duration-500"
        style={{ width: !open ? "260px" : "100px" }}
      >
        <Link href="/" className="text-lg">
          dashboard
        </Link>
        <Link href="/chat" className="text-lg">
          chat
        </Link>
        <Link href="/all-chats" className="text-lg">
          all chats
        </Link>
        <Dashboard />
      </div>
      {isChatPage && (
        <ChatSidebar open={open} setOpen={(value) => setOpen(value)} />
      )}
    </div>
  );
}
