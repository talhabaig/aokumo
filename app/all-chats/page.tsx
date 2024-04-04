import React from "react";
import AllChatSearchBar from "../components/all-chats/AllChatSearchBar"
import ChatHistory from "../components/all-chats/ChatHistory"
import FilterChats from "../components/all-chats/FilterChats";

export default function AllChats() {
    return (
        <div className="bg-[#F0F9FE] px-[60px] py-[40px]">
        <div className="bg-white px-10">
             <AllChatSearchBar/>
            <FilterChats/>
             <ChatHistory/>
             </div>
        </div>
       
    )
}
