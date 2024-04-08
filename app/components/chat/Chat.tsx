"use client";

import { selectChat } from "@/lib/features/chat/chatSlice";
import { useAppSelector } from "@/lib/hooks";
import { Fragment } from "react";
import { CodeBlock } from "../common/CodeBlock";
interface Chat {
  id: number;
  role: "assistant" | "user";
  message: string;
}
export default function Chat() {
  const chat = useAppSelector(selectChat);
  console.log("chat", chat);

  return (
    <Fragment>
      {chat.map((chat: Chat, i: number) => (
        <Fragment key={i}>
          <UserMessage message={chat.message} />
        </Fragment>
      ))}
    </Fragment>
  );
}

function UserMessage({ message }: { message: string }) {
  return (
    <>
      {!message.includes("```") ? (
        <SimpleMessage message={message} />
      ) : (
        message
          .split(/(```[^`]+```)/)
          .filter((str: string) => str.trim() !== "")
          .map((data) =>
            data.includes("```") ? (
              <CodeBlock
                key={Math.random()}
                language={"js" || ""}
                value={data.replace(/```/g, "")}
              />
            ) : (
              <SimpleMessage message={data} />
            )
          )
      )}
    </>
  );
}

function SimpleMessage({ message }: { message: string }) {
  return (
    <div className="mb-5 px-[28px] py-5 rounded-[15px] bg-light-blue flex items-start gap-5">
      <div className="bg-slate-300 rounded-full w-[50px] h-[50px] overflow-hidden drop-shadow-4">
        <img
          className="rounded-full w-full h-full object-cover"
          src={"https://source.unsplash.com/500x500/?working-man"}
          alt="profile"
        />
      </div>
      <span className="text-navy-blue font-medium text-[18px] flex-1 place-self-center">
        {message}
      </span>
    </div>
  );
}
