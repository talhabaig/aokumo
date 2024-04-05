import React from "react";

const ChatHistoryList = [
  {
    id: 1,
    heading: "Lorem ipsum dolor sit amet dolor",
    time: "8 min ago",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendis",
  },
  {
    id: 2,
    heading: "Lorem ipsum dolor sit amet solor",
    time: "18 min ago",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendis adipisicing elit. Fugit iure reiciendis ",
  },
  {
    id: 3,
    heading: "Lorem ipsum dolor sit amet color",
    time: "30 min ago",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendis",
  },
  {
    id: 4,
    heading: "Lorem ipsum dolor sit amet color",
    time: "30 min ago",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure reiciendis",
  },
];

const ChatHistory = () => {
  return (
    <div>
      {ChatHistoryList.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-[20px] border-b-[0.5px] border-b-[#8d9fb73d] pb-[8px] cursor-pointer my-[36px]"
        >
          <div className="bg-slate-300 rounded-full w-[39px] h-[39px] overflow-hidden">
            <img
              className="rounded-full w-full h-full object-cover"
              src={`https://source.unsplash.com/500x500/?working-man,working-woman,${index}`}
              alt="image"
            />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[18px] text-navy-blue">
                {item.heading}
              </span>
              <span className="text-[13px]">{item.time}</span>
            </div>
            <div className="text-container max-w-[600px] overflow-hidden">
              <span className="chat-history-para text-[16px] font-normal text-navy-blue leading-[24px]">
                {item.paragraph}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
