export const ChatNewMessages = ({ isNewMessage }) => {
  if (isNewMessage) {
    return (
      <div className="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center">
        <span className="text-xs font-medium">2</span>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between mr-1 w-[50px]">
        <div></div>
        <div className="w-1 h-1 bg-red-500 text-white mr-[4px] rounded-full flex items-center justify-center">
        </div>
      </div>
    );
  }
};
