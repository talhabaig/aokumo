import { EditSquare, Plus } from "../ui-icons";

export default function ChatBox() {
  return (
    <div className="flex flex-col w-full max-w-[900px] h-[180px] px-[60px] pt-[25px] pb-[20px] mt-auto mb-[4rem] mx-auto border border-[#8d9fb73d] bg-white rounded-[15px] drop-shadow-1">
      <textarea
        className="border-none outline-none resize-none w-full flex-1 placeholder:font-medium"
        placeholder="Ask me anything..."
      ></textarea>
      <div className="flex items-center pt-3 gap-5 h-[40px] text-navy-blue font-semibold border-t border-max-light-gray">
        <button
          title="New Thread"
          type="button"
          className="flex items-center gap-2 hover:text-primary-blue transition-all"
        >
          <EditSquare /> New Thread
        </button>
        <button
          title="Insert Code"
          type="button"
          className="flex items-center gap-2 hover:text-primary-blue transition-all"
        >
          <Plus /> Insert Code
        </button>
      </div>
    </div>
  );
}
