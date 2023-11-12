import { ChatNewMessages } from "./ChatNewMessages";

import { BsRobot } from "react-icons/bs";
export const ChatContentUsers = () => {
  return (
    <div className="flex max-h-[380px] overflow-y-auto flex-col">
      {/* <button className="h-[50px] mb-4">
        <div className="flex items-center p-1 hover:bg-slate-600 rounded-lg justify-between">
          <div className="flex justify-center items-center w-[200px] h-[50px]">
            <div className="relative mr-3">
              <img
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "40px",
                  height: "40px",
                }}
                className=" rounded-3xl"
                src="https://pbs.twimg.com/media/C4f9-0OWQAAQlh0.jpg"
                alt=""
                srcSet=""
              />
              <div className="border border-solid border-white bottom-1 right-[1px] absolute w-[7px] h-[7px] rounded bg-green-500"></div>
            </div>
            <div className="relative flex flex-col h-[50px] w-[150px]">
              <p className="text-[10px] absolute top-[8px]">
                F.A - Gabriel Marquee
              </p>
              <p className="text-[8px] absolute top-[26px] text-gray-300">
                Quedo a la orden.
              </p>
            </div>
          </div>
          <ChatNewMessages isNewMessage={true} />
        </div>
      </button> */}
      <button className="h-[50px] mb-4">
        <div className="flex items-center p-1 hover:bg-slate-600 rounded-lg justify-between">
          <div className="flex justify-center items-center w-[150px] h-[50px]">
            <div className="relative mr-3">
              <BsRobot
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />

              <div className="border border-solid border-white bottom-1 right-[1px] absolute w-[7px] h-[7px] rounded bg-green-500"></div>
            </div>
            <div className="relative flex flex-col h-[50px] w-[100px]">
              <p className="text-[10px] absolute top-[8px]">Chat Bot</p>
              <p className="text-[8px] absolute top-[26px] text-gray-300">
                Un placer ayudarte
              </p>
            </div>
          </div>
          <ChatNewMessages isNewMessage={false} />
        </div>
      </button>
    </div>
  );
};
