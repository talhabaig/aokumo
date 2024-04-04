import React from "react";
import { Search } from "../ui-icons";
import Link from "next/link";

const SearchBar = () => {
  return (
    <div>
      <div>
        <ul className="flex items-center justify-center">
          <li>
            <Link
              href="/"
              className="text-[18px] inline-block p-4 font-normal hover:font-bold hover:border-b-2 visited:text-navy-blue"
            >
              All Chats
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-[18px] inline-block p-4 font-normal hover:font-bold hover:border-b-2 visited:text-navy-blue"
            >
              Team Chats
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-[18px] inline-block p-4 font-normal hover:border-b-2 hover:font-bold visited:text-navy-blue"
            >
              AI Chats
            </Link>
          </li>
        </ul>
      </div>

      <div className="pt-2 relative mb-6">
        <input
          className="border-[0.5px] w-[100%] border-[#8d9fb7] p-[20px_30px_20px_40px] rounded-[15px] text-[20px] font-medium text-[#8d9fb7] focus:outline"
          type="search"
          placeholder="Search Chats"
        />
        <div>
          <Search className="w-[24px] h-[24px] absolute right-[30px] top-[33px] " />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
