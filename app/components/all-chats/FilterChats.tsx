import React from "react";

const FilterChatsList = [
  {
    id: 1,
    text: "Kubernetes",
  },
  {
    id: 2,
    text: "Aws",
  },
  {
    id: 3,
    text: "Cloud Computing",
  },
  {
    id: 4,
    text: "Cloud Computing",
  },
  {
    id: 5,
    text: "Computing",
  },
  {
    id: 6,
    text: "Cloud",
  },
];

const FilterChats = () => {
  return (
    <div className="flex gap-3 ">
      {FilterChatsList.map((item, index) => (
        <div key={index}>
          <button className="text-center text-[16px] drop-shadow-2 text-primary-blue font-bold p-[0px_24px] rounded-full border whitespace-nowrap border-primary-blue hover:bg-primary-blue hover:text-white">
            {item.text}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterChats;
