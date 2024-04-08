import React from "react";
import AllChatSearchBar from "../components/all-chats/AllChatSearchBar";
import ChatHistory from "../components/all-chats/ChatHistory";
import FilterChats from "../components/all-chats/FilterChats";

export default function AllChats() {
  return (
    <div className="bg-[#F0F9FE]">
      <div className="max-w-[1506px] mx-auto p-11">
        <div className="bg-white py-12">
          <AllChatSearchBar />
          <FilterChats />
          <ChatHistory />
        </div>
      </div>
    </div>
  );
}
