import React from "react";

const FilterChatsList = [
  {
    id: 1,
    text: "Kubernetes",
  },
  {
    id: 2,
    text: "AWS",
  },
  {
    id: 3,
    text: "Cloud Computing",
  },
  {
    id: 4,
    text: "Dev Ops",
  },
  {
    id: 5,
    text: "CIO Services",
  },
  {
    id: 6,
    text: "Data Infrastructure",
  },
  {
    id: 7,
    text: "AI",
  },
];

const FilterChats = () => {
  return (
    <div className="px-10">
    <div className="flex flex-wrap gap-3 mx-auto border-b-[0.5px] border-b-[#8d9fb73d] pb-[30px] ">
      {FilterChatsList.map((item, index) => (
        <div key={index}>
          <button className="filter-chat-shadow transition-all text-center text-[16px] text-primary-blue font-bold p-[3px_36px] rounded-full border whitespace-nowrap border-primary-blue hover:bg-primary-blue hover:text-white drop-shadow-2">
            {item.text}
          </button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FilterChats;
