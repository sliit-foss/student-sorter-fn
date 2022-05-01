import { ChatAlt2Icon } from "@heroicons/react/solid";

interface ToggleProps {
  toggleFunction: Function;
}

const Toggle = ({ toggleFunction }: ToggleProps) => {
  return (
    <div
      className="h-full w-10 md:w-16 cursor-pointer flex flex-col bg-primary-base hover:bg-primary-hover justify-center items-center transition duration-200"
      onClick={() => toggleFunction()}
    >
      <ChatAlt2Icon className="h-12 md:h-16 p-2 text-white" />
    </div>
  );
};

export default Toggle;
