import ChatBox from "../components/chat/ChatBox";
import Chat from "../components/chat/Chat";
import SuggestionMessages from "../components/chat/SuggestionMessage";

export default function page() {
  return (
    <div className="flex flex-col">
      <div className="h-[calc(100vh-315px)] overflow-auto px-[20px]">
        <div className="w-full max-w-[880px] mx-auto flex flex-col gap- pt-7">
          {false ? <Chat /> : <SuggestionMessages />}
        </div>
      </div>
      <ChatBox />
    </div>
  );
}
