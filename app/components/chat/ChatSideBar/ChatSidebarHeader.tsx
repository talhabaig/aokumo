import { Edit, Search } from "../../ui-icons";
interface Props {
  open: boolean;
}
export default function ChatSidebarHeader({ open }: Props) {
  return (
    <div className="grid grid-cols-[1fr_50px] gap-4 pt-[19px] pb-[22px] px-[20px] h-[92px] bg-light-blue place-items-end z-10 !justify-end border-b border-max-light-gray">
      <div
        className={`${
          open && "!w-[232px]"
        } relative w-0 overflow-hidden transition-all duration-500 drop-shadow-2`}
      >
        <input
          className={`border-none outline-none w-full h-[50px] p-[10px] !pl-[40px] bg-white rounded-[15px]`}
          placeholder="Search Chats"
          type="text"
        />
        <Search className="absolute top-[50%] translate-y-[-50%] left-[14px]" />
      </div>
      <button
        title="New Chat"
        type="button"
        className="w-[50px] h-[50px] flex items-center justify-center rounded-[15px] bg-primary-blue drop-shadow-2"
      >
        <Edit />
      </button>
    </div>
  );
}
