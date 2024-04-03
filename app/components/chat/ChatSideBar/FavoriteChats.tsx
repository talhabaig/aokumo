import { Archive, Star } from "../../ui-icons";

export default function FavoriteChats() {
  return (
    <div className="flex flex-col cursor-pointer mb-2">
      <div className="flex items-center justify-between group">
        <span className="font-bold text-[18px] text-navy-blue max-w-[80%] truncate">
          Lorem ipsum dolor sit amet dolor
        </span>
        <Archive className="hidden group-hover:block" />
        <Star active={false} />
      </div>

      <span className="text-[13px] font-medium text-gray">8 mins ago</span>
    </div>
  );
}
