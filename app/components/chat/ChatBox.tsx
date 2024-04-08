"use client";
import {
  Code,
  EditSquare,
  NewsPaper,
  PieChart,
  Plus,
  QueryStats,
  Reddit,
  Send,
  World,
} from "../ui-icons";
import { useRef } from "react";
import { newThread, sendMsg } from "@/lib/features/chat/chatSlice";
import { useAppDispatch } from "@/lib/hooks";

const newThreadOptions = [
  {
    name: "All",
    disc: "Lorem ipsum dolor sit amet consectetur.",
    icon: <World />,
  },
  {
    name: "Chart",
    disc: "Lorem ipsum dolor sit amet consectetur.",
    icon: <PieChart />,
  },
  {
    name: "Code",
    disc: "Lorem ipsum dolor sit amet consectetur.",
    icon: <Code />,
  },
  {
    name: "Stats",
    disc: "Lorem ipsum dolor sit amet consectetur.",
    icon: <QueryStats />,
  },
  {
    name: "News",
    disc: "Lorem ipsum dolor sit amet consectetur.",
    icon: <NewsPaper />,
  },
  {
    name: "Reddit",
    disc: "Lorem ipsum dolor sit amet consectetur.",
    icon: <Reddit />,
  },
];

export default function ChatBox() {
  const dispatch = useAppDispatch();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertCode = () => {
    const codeBlock = "```\n\n```";
    if (textareaRef.current) {
      textareaRef.current.value = codeBlock;

      // Set the cursor position inside the code block
      const textarea = textareaRef.current;
      const cursorPosition = codeBlock.length - 4; // Adjust the cursor position as needed
      textarea.focus();
      textarea.setSelectionRange(cursorPosition, cursorPosition);
    }
  };

  const send = async () => {
    const msg = textareaRef.current?.value || "";
    if (textareaRef.current) {
      textareaRef.current.value = "";
    }
    try {
      dispatch(sendMsg(msg));
    } catch (err) {
      console.log(err);
    }
    console.log();
  };

  return (
    <div className="px-[20px]">
      <div className="flex flex-col w-full max-w-[900px] h-[180px] pl-[60px] pr-[90px] pt-[25px] pb-[20px] mt-auto mb-[40px] mx-auto border border-[#8d9fb73d] bg-white rounded-[15px] drop-shadow-1">
        <textarea
          ref={textareaRef}
          className="border-none outline-none resize-none w-full flex-1 placeholder:font-medium"
          placeholder="Ask me anything..."
        ></textarea>
        <div className="flex items-center pt-4 gap-2 h-[40px] text-navy-blue font-bold border-t border-max-light-gray">
          <button
            title=""
            type="button"
            className="ml-[-10px] [&>div]:hover:grid hover:bg-light-blue rounded-[8px] px-[11px] py-[7px] flex items-center gap-2 hover:text-primary-blue transition-all"
          >
            <EditSquare /> New Thread
            <NewThreadDropdown />
          </button>
          <button
            onClick={insertCode}
            title="Insert Code"
            type="button"
            className="hover:bg-light-blue rounded-[8px] px-[11px] py-[7px] flex items-center gap-2 hover:text-primary-blue transition-all"
          >
            <Plus /> Insert Code
          </button>
        </div>
        <div
          onClick={send}
          className="cursor-pointer absolute right-[20px] bottom-[20px] w-[50px] h-[50px] flex items-center justify-center rounded-full bg-primary-blue"
        >
          <Send />
        </div>
      </div>
    </div>
  );
}

function NewThreadDropdown() {
  const dispatch = useAppDispatch();

  const openNewThread = () => {
    dispatch(newThread());
  };
  return (
    <div className="hidden grid-cols-3 gap-2 absolute left-[48px] bottom-[50px] p-[13px] min-h-[5rem] w-[520px] border border-[#8d9fb73d] bg-white rounded-[15px] drop-shadow-1">
      {newThreadOptions.map(({ name, disc, icon }, i) => (
        <div
          key={i}
          onClick={openNewThread}
          className="p-3 flex flex-col gap-1 rounded-[8px] text-light-gray [&>div>span]:text-navy-blue [&>div>span]:hover:text-primary-blue hover:!text-primary-blue hover:bg-light-blue cursor-pointer transition-all"
        >
          <div className="flex items-start gap-3">
            {icon}
            <span className="font-bold">{name}</span>
          </div>
          <span className="text-[14px] font-medium text-start">{disc}</span>
        </div>
      ))}
    </div>
  );
}
