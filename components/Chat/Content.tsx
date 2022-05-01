import Chatrooms from "./Chatrooms";

interface ContentProps {
  chatModuleActive: Boolean;
}

const Content = ({ chatModuleActive }: ContentProps) => {
  return (
    <div
      className={`${
        chatModuleActive ? "w-full bg-white/70 backdrop-blur-sm" : "w-0"
      } h-full flex justify-start items-center transition-all duration-700 overflow-hidden`}
    >
      <Chatrooms />
    </div>
  );
};

export default Content;
