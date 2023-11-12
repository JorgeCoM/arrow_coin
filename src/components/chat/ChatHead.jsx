import { ChatHeadAvatars } from "./ChatHeadAvatars";

export const ChatHead = () => {
  return (
    <div className="flex w-full mb-3 mt-2  flex-col">
      <div className="w-full flex justify-between">
        <div>
          <p className="text-xs mb-4 font-bold">Mensajes destacados</p>
        </div>
      </div>
    </div>
    // <div className="flex w-full mb-3 mt-2 h-[110px] flex-col">
    //   <div className="w-full flex justify-between">
    //     <div>
    //       <p className="text-xs mb-4 font-bold">Conectados ahora</p>
    //     </div>
    //     <div>
    //       <p className="text-blue-500 text-xs">10</p>
    //     </div>
    //   </div>
    //   <ChatHeadAvatars/>
    // </div>
  );
};
