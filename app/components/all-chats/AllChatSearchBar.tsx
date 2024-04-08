import React from "react";
import { Search } from "../ui-icons";
import Link from "next/link";

const SearchBarTabs = [
  { id: 1, 
    label: "All Chats", 
    href: "//" },

  { id: 2, 
    label: "Team Chats", 
    href: "/" },
  
  { id: 3, 
    label: "AI Chats", 
    href: "/" },
];
const SearchBar = () => {

  return (
    <div className="px-10">
      <div>
        <ul className="flex justify-center border-b-[0.5px] border-b-[#8d9fb73d] w-full mb-8">
          {SearchBarTabs.map((item, index) => (
            <li
              key={index}
              className="tabs transition-all text-[18px] px-8 pb-4 font-medium border-b-[#22A3F1] visited:text-navy-blue"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mb-[30px]">
        <input
          className="border-[0.5px] w-full border-[#8d9fb73d] bg-white drop-shadow-1 p-[18px_70px_18px_40px] rounded-[15px] text-[20px] font-medium text-[#8d9fb7] outline-none flex-1"
          type="text"
          placeholder="Search Chats"
        />
        <div>
          <Search className="w-[24px] h-[24px] absolute right-[25px] top-[22px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
