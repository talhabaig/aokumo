"use client";
import { useEffect, useState } from "react";
import ChatSidebar from "../chat/ChatSideBar/ChatSidebar";
import {
  Active,
  AllAssistant,
  Aokuma,
  AokumoLogo,
  Chats,
  DarkMood,
  Dashboard,
  Portfolios,
  Projects,
  Reports,
  Teams,
} from "../ui-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const sideBarItems = [
  {
    id: 1,
    label: "Dashboard",
    icon: <Dashboard />,
    link: "/",
  },
  {
    id: 2,
    label: "All Assistant",
    icon: <AllAssistant />,
    link: "/chat",
  },
  {
    id: 3,
    label: "All Chats",
    icon: <Chats />,
    link: "/all-chats",
  },
  {
    id: 4,
    label: "Teams",
    icon: <Teams />,
    link: "/teams",
  },
  {
    id: 5,
    label: "Projects",
    icon: <Projects />,
    link: "/project",
  },
  {
    id: 6,
    label: "Portfolios",
    icon: <Portfolios />,
    link: "/portfolio",
  },
  {
    id: 7,
    label: "Reports",
    icon: <Reports />,
    link: "/reports",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isChatPage = pathname.startsWith("/chat");

  const [open, setOpen] = useState(false);

  function setOpenState(state: boolean) {
    setOpen(state);
  }

  useEffect(() => {
    setOpen(isChatPage);
  }, [pathname]);
  return (
    <div className="flex">
      <div
        className="flex flex-col h-full transition-all duration-500"
        style={{ width: !open ? "260px" : "100px" }}
      >
        <div className="px-[2rem] border-b min-h-[92px] h-[92px]  border-[#8d9fb73d]">
          {open ? (
            <AokumoLogo width="36px" height="36px" className="mt-[2rem]" />
          ) : (
            <Aokuma height={36} className="mt-[2rem]" />
          )}
        </div>

        <div className="flex flex-col justify-between h-full ">
          <div className="h-[calc(100vh-241px)] overflow-auto">
            {sideBarItems?.map((item) => (
              <Link
                href={item.link}
                className={`flex min-h-[59px] gap-4 py-4 px-8 cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis items-center hover:bg-[#E9F7FF] ${
                  pathname === item.link
                    ? "bg-[#E9F7FF] border-r border-primary-blue"
                    : ""
                } `}
                key={item.id}
              >
                <div className={`flex gap-x-4 items-center `}>
                  {React.cloneElement(item.icon, {
                    className: `${
                      pathname === item.link
                        ? "stroke-white fill-primary-blue "
                        : ""
                    }`,
                  })}
                  {!open && (
                    <div className="text-[18px] font-bold text-navy-blue">
                      {item.label}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div>
            <div className="pl-7 pr-8 pb-6 h-[69px] ">
              <div className="bg-[#F3FAFE] h-[45px] w-[45px]  rounded-full flex items-center justify-center">
                <DarkMood />
              </div>
            </div>

            <div className="flex items-center gap-4 py-5 pl-7 pr-8 border-t h-[80px] border-[#8d9fb73d] ">
              <div className="relative">
                <div className="bg-slate-300 rounded-full w-[39px] h-[39px] overflow-hidden">
                  <img
                    className="rounded-full w-full h-full object-cover"
                    src={`https://source.unsplash.com/500x500/?working-man,working-woman`}
                    alt="image"
                  />
                </div>
                <div className="absolute bottom-[1px] left-[31px] ">
                  <Active />
                </div>
              </div>
              <span className="text-[18px] font-bold text-navy-blue whitespace-nowrap overflow-hidden overflow-ellipsis">
                joana Doe
              </span>
            </div>
          </div>
        </div>
      </div>

      {isChatPage && <ChatSidebar open={open} setOpenState={setOpenState} />}
    </div>
  );
}
