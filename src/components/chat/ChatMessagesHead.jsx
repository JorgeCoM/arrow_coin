export const ChatMessagesHead = () => {
  return (
    <div className="flex justify-between">
      <p>Mensajes</p>
      <div>
        <button>
          <i class="bx bxs-send text-lg text-white"></i>
        </button>
        <button>
          <i class="bx bx-cog text-lg ml-1 text-white"></i>
        </button>
      </div>
    </div>
  );
};
