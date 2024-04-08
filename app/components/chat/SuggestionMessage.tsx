"use client";
import { sendMsg } from "@/lib/features/chat/chatSlice";
import {
  AokumoLogo as Aokumo,
  Chart,
  LightBulb,
  Tactic,
  TouchApp,
} from "../ui-icons";
import { useAppDispatch } from "@/lib/hooks";
const suggestions = [
  {
    title: "Help me pick",
    text: "an outfit will look good on camera",
    message: "Help me pick an outfit will look good on camera",
    icon: <TouchApp />,
  },
  {
    title: "Make a content strategy",
    text: "for a newsletter featuring free local weekend events",
    message:
      "Make a content strategy for a newsletter featuring free local weekend events",
    icon: <Tactic />,
  },
  {
    title: "Give me Ideas",
    text: "for what to do with my kid's art",
    message: "Give me Ideas for what to do with my kids art",
    icon: <LightBulb />,
  },
  {
    title: "Help me pick",
    text: "about how to plan my New Years resolutions",
    message: "Help me pick about how to plan my New Years resolutions",
    icon: <Chart />,
  },
];

export default function SuggestionMessages() {
  const dispatch = useAppDispatch();
  const send = async (msg: string) => {
    try {
      dispatch(sendMsg(msg));
    } catch (err) {
      console.log(err);
    }
    console.log();
  };
  return (
    <div className="flex flex-col gap-4 items-center mx-auto w-full max-w-[750px] mb-4">
      <AokumoLogo />
      <div className="text-navy-blue font-bold text-[35px]">
        How can i help you today?
      </div>
      <div className="grid grid-cols-2 gap-5 w-full">
        {suggestions.map((item, index) => (
          <Suggestion
            onClick={() => send(item.message)}
            key={index}
            data={item}
          />
        ))}
      </div>
    </div>
  );
}

function AokumoLogo() {
  return (
    <div className="w-[80px] h-[80px] bg-white flex items-center justify-center rounded-full drop-shadow-5">
      <Aokumo className="w-[50px]" />
    </div>
  );
}

function Suggestion({ data, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="px-[25px] py-[20px] flex flex-col gap-2 border border-[#8d9fb73d] bg-white rounded-[15px] drop-shadow-1 cursor-pointer transition-all hover:bg-slate-100"
    >
      <div className="flex items-center gap-4">
        {data.icon}
        <span className="text-[18px] font-bold text-navy-blue">
          {data.title}
        </span>
      </div>
      <span className="text-gray block truncate text-[15px]">{data.text}</span>
    </div>
  );
}
