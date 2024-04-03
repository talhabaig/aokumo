import { Edit, Search } from "../../ui-icons";
interface Props {
  open: boolean;
}
export default function ChatSidebarHeader({ open }: Props) {
  return (
    <div
      className={`grid grid-cols-[1fr_50px] gap-4 place-items-center ${
        !open && "!grid-cols-1"
      }`}
    >
      {open && (
        <div className="relative w-full">
          <input
            className="border-none outline-none w-full h-[50px] p-[10px] !pl-[40px] bg-white rounded-[15px] drop-shadow-2"
            placeholder="Search Chats"
            type="text"
          />
          <Search className="absolute top-[50%] translate-y-[-50%] left-[14px]" />
        </div>
      )}
      <button className="w-[50px] h-[50px] ml-auto flex items-center justify-center rounded-[15px] bg-primary-blue drop-shadow-2">
        <Edit />
      </button>
    </div>
  );
}
