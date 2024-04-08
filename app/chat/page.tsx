"use client";
import ChatBox from "../components/chat/ChatBox";
import Chat from "../components/chat/Chat";
import SuggestionMessages from "../components/chat/SuggestionMessage";
import { useAppSelector } from "@/lib/hooks";
import { selectChat } from "@/lib/features/chat/chatSlice";

export default function page() {
  const chat = useAppSelector(selectChat);

  return (
    <div className="flex flex-col">
      <div className="h-[calc(100vh-315px)] overflow-auto px-[20px]">
        <div className="w-full max-w-[880px] mx-auto flex flex-col gap- pt-7">
          {chat && chat.length > 0 ? <Chat /> : <SuggestionMessages />}
        </div>
      </div>
      <ChatBox />
    </div>
  );
}
