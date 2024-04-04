"use client";

import { useEffect, useState } from "react";
import ChatSidebarHeader from "./ChatSidebarHeader";
import FavoriteChats from "./FavoriteChats";
import MyChats from "./MyChats";
import RecentTeamChats from "./RecentTeamChats";
import { ExpandCircle } from "../../ui-icons";

interface Props {
  setOpenState: (state: boolean) => void;
  open: boolean;
}

export default function ChatSidebar({ open, setOpenState }: Props) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(open);
    }, 150);

    return () => clearTimeout(timeoutId); // Clear the timeout when the component unmounts or `open` changes
  }, [open]);

  return (
    <div
      className="bg-light-blue overflow-x-hidden overflow-y-auto h-screen transition-all duration-500 pb-[30px]"
      style={{ width: open ? "340px" : "90px" }}
    >
      <div className="flex flex-col h-full">
        <ChatSidebarHeader open={open} />

        {isOpen && (
          <div className="mt-[40px] px-[28px] bg-red-30 h-[calc(100vh-252px)] overflow-auto">
            <span className="font-bold block text-light-gray tracking-[1px] mb-[15px]">
              Favorite Chats
            </span>
            {[0, 1].map((_, index) => (
              <FavoriteChats key={index} />
            ))}
            <span className="font-bold block text-light-gray tracking-[1px] mt-[35px] mb-[15px]">
              My Chats
            </span>
            {[0, 1, 2, 3].map((_, index) => (
              <MyChats key={index} />
            ))}
            <span className="font-bold block text-light-gray tracking-[1px] mt-[35px] mb-[15px]">
              Recent Team Chats
            </span>
            {[0, 1, 2, 3].map((_, index) => (
              <RecentTeamChats index={index} key={index} />
            ))}
          </div>
        )}

        <ExpandCircle
          onClick={() => {
            setOpenState(!open);
            console.log(open);
          }}
        />
      </div>
    </div>
  );
}
