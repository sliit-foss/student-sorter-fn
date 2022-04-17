import { ChatAlt2Icon } from "@heroicons/react/solid";
import { useState } from "react";

const Chat = () => {
  const [chatModuleActive, setChatModuleActive] = useState(false)
  return (
    <div className={`fixed left-0 top-0 h-full ${chatModuleActive ? 'w-screen' : 'w-20' } bg-red-400 flex flex-col justify-center items-center`}>
        {
          !chatModuleActive ? (
            <div className="h-full w-full bg-primary-base hover:bg-primary-hover cursor-pointer flex flex-col justify-center items-center transition duration-200">
              <ChatAlt2Icon className="h-18 p-2 text-white"/>
            </div>
          ):(
            <div>
              sdfsdfsdf
            </div>
          )
        }
    </div>
  );
};

export default Chat;
