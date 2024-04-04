"use client";
import Image from "next/image";
import { Archive, Star } from "../../ui-icons";

export default function RecentTeamChats({ index }: any) {
  return (
    <div className="cursor-pointer flex items-center gap-[14px] mb-2">
      <div className="bg-slate-300 rounded-full w-[39px] h-[39px] overflow-hidden">
        <img
          className="rounded-full w-full h-full object-cover"
          src={`https://source.unsplash.com/500x500/?working-man,working-woman,${index}`}
          alt="profile"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between group">
          <span className="font-bold text-[18px] text-navy-blue max-w-[80%] truncate">
            Lorem ipsum dolor sit amet dolor
          </span>
          <span title="Archive" className="hidden group-hover:block">
            <Archive />
          </span>
          <span title="Favorite">
            <Star active={false} />
          </span>
        </div>

        <span className="text-[13px] font-medium text-gray opacity-[.8]">
          33 mins ago
        </span>
      </div>
    </div>
  );
}
