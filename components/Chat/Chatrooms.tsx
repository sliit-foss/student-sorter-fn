  
  interface ChatroomProps {
  }
  
  const Chatrooms = ({ }: ChatroomProps) => {
    return (
      <div
        className={`h-full w-full md:w-1/2 lg:w-3/12 bg-white shadow-lg overflow-hidden`}
      >
          <div className="w-full flex justify-center items-center bg-primary-base hover:bg-primary-hover p-4 cursor-default transition duration-200">
              <span className="text-3xl text-white text-center font-semibold tracking-wider">Spaces</span>
          </div>
      </div>
    );
  };
  
  export default Chatrooms;
  