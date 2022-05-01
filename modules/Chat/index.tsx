import { useState } from "react";
import Toggle from "../../components/Chat/Toggle";
import Content from "../../components/Chat/Content";

const Chat = () => {
  const [chatModuleActive, setChatModuleActive] = useState(false);
  return (
    <div className={`fixed left-0 top-0 ${ chatModuleActive ? 'w-full' : 'w-10 md:w-16'} h-full z-2 flex justify-start items-center shadow-xl transition-all duration-700 `}>
      <Toggle toggleFunction={() => setChatModuleActive(!chatModuleActive)} />
      <Content chatModuleActive={chatModuleActive} />
    </div>
  );
};

export default Chat;
