import {
  ChatContentUsers,
  ChatHead,
  ChatMessagesHead,
  ChatSearch,
} from "../../components";
import { BsRobot, BsFillPersonFill } from "react-icons/bs";
// import { ChatBody } from "../../components/chat/ChatBody";
export const Chat = () => {
  return (
    <div className="w-full grid grid-cols-7 h-[640px] mt-12">
      <div className="col-span-1  h-full border-r border-gray-600 rounded-l-lg bg-gray-900">
        <div className="w-full flex px-2 flex-col h-full">
          {/* <ChatHead /> */}
          <div className="w-full h-full">
            <div className="flex flex-col w-full h-full">
              {/* <ChatMessagesHead /> */}
              <ChatSearch />
              <div className="w-full h-full">
                <ChatContentUsers />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 flex-grow h-full ">
        <div className=" w-full h-full flex flex-col">
          <div className="h-full border-b bg-gray-900 border-gray-600 relative ">
            <div className="flex flex-row items-center  p-5 w-full">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                A
              </div>
              <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div>Hey How are you today?</div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end  p-5">
              <div className="relative mr-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div>Hey How are you today? </div>
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                A
              </div>
            </div>
            <div className="flex flex-row items-center h-16 rounded-xl bg-white px-4 mx-4 absolute bottom-4 w-[95%]">
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                </div>
              </div>
              <div className="ml-4">
                <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                  <span>Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Seleccionar un chat */}
          {/* <div
            className="h-full border-b bg-gray-900 border-gray-600 w-[716px]"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="">
              <div className="" style={{ width: "100%" }}>
                <button className="my-5 w-96 flex items-center   hover:text-black hover:bg-white duration-300 ease-out rounded-full p-1 border  border-white  text-white">
                  <BsRobot className="w-10 h-10 mx-4" />
                  Chat Bot AI Assistant
                </button>
                <button className="my-5 w-96 flex items-center   hover:text-black hover:bg-white duration-300 ease-out rounded-full p-1 border  border-white  text-white">
                  <BsFillPersonFill className="w-10 h-10 mx-4" />
                  Personal Financial Assistant
                </button>
              </div>
            </div>
 
          </div> */}
        </div>
      </div>
      <div className="col-span-2 h-full border-l rounded-r-lg border-gray-600 bg-gray-900">
        <div className="w-full flex px-2 flex-col h-full">
          <ChatHead />
          <div className="w-full h-full">
            <div className="h-full border-b bg-gray-900 border-gray-600  ">
              <div className="flex flex-row items-center  p-1 w-full">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                  A
                </div>
                <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                  <div>Hey How are you today?</div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-end  p-1">
                <div className="relative mr-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                  <div>Hey How are you today? </div>
                </div>
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                  A
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="flex pr-4 items-center">
<button>
  <i className="bx bx-user-plus hover:text-black hover:bg-white duration-300 ease-out rounded-full p-[6px] border border-white ml-1 text-white"></i>
</button>
<button>
  <i className="bx bxs-credit-card hover:text-black hover:bg-white duration-300 ease-out rounded-full p-[6px] border border-white ml-1 text-white"></i>
</button>
<button>
  <i className="bx bx-group hover:text-black hover:bg-white duration-300 ease-out rounded-full p-[6px] border border-white ml-1 text-white"></i>
</button>
</div>  */
}
