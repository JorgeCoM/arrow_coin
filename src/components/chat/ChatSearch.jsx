export const ChatSearch = () => {
  return (
    <div className="w-full mb-7 relative h-[25px] mt-3">
      <input
        className="w-full text-white outline-none pl-8 text-sm p-2 bg-slate-700"
        type="search"
        placeholder="buscar..."
      />
      <i className="bx bx-search text-white absolute left-2 top-1 text-lg"></i>
    </div>
  );
};
