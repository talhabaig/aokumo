"use client";
import { EditSquare, Plus, Send } from "../ui-icons";
import { useRef } from "react";
import { sendMsg } from "@/lib/features/chat/chatSlice";
import { useAppDispatch } from "@/lib/hooks";
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
        <div className="flex items-center pt-4 gap-5 h-[40px] text-navy-blue font-bold border-t border-max-light-gray">
          <button
            title="New Thread"
            type="button"
            className="flex items-center gap-2 hover:text-primary-blue transition-all"
          >
            <EditSquare /> New Thread
          </button>
          <button
            onClick={insertCode}
            title="Insert Code"
            type="button"
            className="flex items-center gap-2 hover:text-primary-blue transition-all"
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
