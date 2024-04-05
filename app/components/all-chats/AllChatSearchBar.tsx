import React from "react";
import { Search } from "../ui-icons";
import Link from "next/link";

const SearchBar = () => {
  return (
    <div>
      <div>
        <ul className="flex justify-center border-b-[0.5px] gap-12 hover:font-bold border-b-[#8d9fb73d] p-[24px] w-full mb-5">
          <li>
            <Link
              href="//"
              className="text-[18px] cool pb-6 font-medium  hover:border-b-2 border-[#22A3F1] visited:text-navy-blue"
            >
              All Chats
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-[18px] pb-6 font-medium hover:border-b-2 border-[#22A3F1] visited:text-navy-blue"
            >
              Team Chats
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-[18px] pb-6 font-medium hover:border-b-2  border-[#22A3F1] visited:text-navy-blue"
            >
              AI Chats
            </Link>
          </li>
        </ul>
      </div>

      <div className="pt-2 relative mb-6">
        <input
          className="border-[0.5px] w-full border-[#8d9fb73d]  bg-white  drop-shadow-1 p-[20px_70px_20px_40px] rounded-[15px] text-[20px] font-medium text-[#8d9fb7]  outline-none  flex-1"
          type="text"
          placeholder="Search Chats"
        />
        <div>
          <Search className="w-[24px] h-[24px] absolute right-[30px] top-[33px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
