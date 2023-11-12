import {
  ChatContentUsers,
  ChatHead,
  ChatMessagesHead,
  ChatSearch,
} from "../../components";

export const Chat = () => {
  return (
    <div className="w-full flex h-[640px]">
      <div className="w-[280px] h-full border-r border-gray-600 rounded-l-lg bg-gray-900">
        <div className="w-full flex px-2 flex-col h-full">
          <ChatHead />
          <div className="w-full h-full">
            <div className="flex flex-col w-full h-full">
              <ChatMessagesHead />
              <ChatSearch />
              <div className="w-full h-full">
                <ChatContentUsers />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow h-full ">
        <div className=" w-full h-full flex flex-col">
          <div className="h-[60px] border-b bg-gray-900 border-gray-600">
            <div className="w-full h-full flex justify-between">
              <div className="w-[130px] pl-4 h-full flex items-center">
                <p className="text-[12px] font-bold">@Manuel Mejia</p>
              </div>
              <div className="flex pr-4 items-center">
                <button>
                  <i class="bx bx-user-plus hover:text-black hover:bg-white duration-300 ease-out rounded-full p-[6px] border border-white ml-1 text-white"></i>
                </button>
                <button>
                  <i class="bx bxs-credit-card hover:text-black hover:bg-white duration-300 ease-out rounded-full p-[6px] border border-white ml-1 text-white"></i>
                </button>
                <button>
                  <i class="bx bx-group hover:text-black hover:bg-white duration-300 ease-out rounded-full p-[6px] border border-white ml-1 text-white"></i>
                </button>
              </div>
              <div className="mr-4">
                <div className="relative w-[100px] h-[60px] flex justify-center items-center">
                  <div
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "40px",
                      height: "40px",
                    }}
                    className=" rounded-3xl absolute z-30 left-[20px] bg-slate-500"
                  >
                    <img className="w-full rounded-3xl h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAThNgEM21AhWyam0Oq3mVTx2raMvYmO-3zA&usqp=CAU" alt="" srcset="" />
                  </div>
                  <div
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "40px",
                      height: "40px",
                    }}
                    className="rounded-3xl text-xs absolute flex justify-center items-center z-40 right-[20px] bg-blue-500"
                  >+15</div>
                  <div
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "40px",
                      height: "40px",
                    }}
                    className="rounded-3xl absolute right-[57px] bg-slate-300"
                  >
                    <img className="w-full rounded-3xl h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjkW6L6Fi2RYRQtGGPZeDA_Qt0qADmENA6A&usqp=CAU" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[250px] h-full border-l rounded-r-lg border-gray-600 bg-gray-900"></div>
    </div>
  );
};
