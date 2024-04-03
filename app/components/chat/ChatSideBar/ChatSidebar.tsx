"use client";

import { Dispatch, SetStateAction } from "react";
import ChatSidebarHeader from "./ChatSidebarHeader";
import FavoriteChats from "./FavoriteChats";
import MyChats from "./MyChats";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export default function ChatSidebar({ open, setOpen }: Props) {
  return (
    <div
      className="bg-light-blue overflow-hidden transition-all duration-500 px-[20px] py-[15px]"
      style={{ width: open ? "340px" : "90px" }}
    >
      <div className="flex flex-col" onClick={() => setOpen((value) => !value)}>
        <ChatSidebarHeader open={open} />

        {open && (
          <div className="mt-[40px]">
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
          </div>
        )}
      </div>
    </div>
  );
}
