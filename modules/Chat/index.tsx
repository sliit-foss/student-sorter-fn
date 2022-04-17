import { useState } from "react";
import Toggle from "../../components/Chat/Toggle";
import Content from "../../components/Chat/Content";

const Chat = () => {
  const [chatModuleActive, setChatModuleActive] = useState(false);
  return (
    <div className="fixed left-0 top-0 w-full h-full z-20 flex justify-start items-center shadow-xl">
      <Toggle toggleFunction={() => setChatModuleActive(!chatModuleActive)} />
      <Content chatModuleActive={chatModuleActive} />
    </div>
  );
};

export default Chat;
