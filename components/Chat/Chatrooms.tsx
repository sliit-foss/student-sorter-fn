import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getChatrooms } from "../../services/chatroomService";
import Spinner from "../common/Spinner";
import styles from "./Chatroom.module.css";

interface ChatroomProps {}

const Chatrooms = ({}: ChatroomProps) => {
  const [chatrooms, setChatrooms] = useState([]);

  useEffect(() => {
    fetchChatrooms();
  }, []);

  const fetchChatrooms = async () => {
    try {
      const res = await getChatrooms();
      setChatrooms(res.data.data);
    } catch (error: any) {
      toast.error(error.toString(), {
        autoClose: 2000,
      });
    }
  };

  //fetch first letter of each word in chatroom name
  const formattedChatroomName = (chatroomName: string) => {
    const formattedName = chatroomName.split(" ");
    const firstLetter = formattedName.map((word) => {
      return word.charAt(0);
    });
    return firstLetter.join("");
  }

  return (
    <div
      className={`h-full w-full md:w-1/2 lg:w-3/12 bg-white/30 shadow-lg overflow-hidden`}
    >
      <div className="w-full flex justify-center items-center bg-primary-base hover:bg-primary-hover p-4 cursor-default transition duration-200 shadow-xl">
        <span className="text-3xl text-white text-center font-semibold tracking-wider">
          Spaces
        </span>
      </div>
      {
        chatrooms.length > 0 ? (
        <div className={`h-full overflow-y-scroll ${styles['chatroom-area']}`}>
          {chatrooms.map((chatroom: any, index: number) => (
            <div
              key={index}
              className="w-full flex justify-start items-center shadow cursor-pointer group bg-gradient-to-r from-primary-base/10 to-white/50 hover:bg-blue-200 transition duration-200"
            >
              <div className="avatar py-4 mr-6">
                <div className="h-14 w-14 rounded-full ring ring-primary-base bg-primary-base ring-offset-base-100 ring-offset-2 ml-6 group-hover:ml-12 flex justify-center items-center transition-margin duration-200">
                   <span className="font-semibold text-white">
                   { formattedChatroomName(chatroom.name) }
                   </span>
                </div>
              </div>
              <span className="tracking-wide font-semibold">
                {chatroom.name}
              </span>
            </div>
          ))}
        </div>):(
          <div className="w-full h-full flex justify-center items-center">
            <Spinner />
          </div>
        )
      }
      <ToastContainer />
    </div>
  );
};

export default Chatrooms;
