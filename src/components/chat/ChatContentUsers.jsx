import { ChatNewMessages } from "./ChatNewMessages";

export const ChatContentUsers = () => {
  return (
    <div className="flex max-h-[330px] overflow-y-auto flex-col">
      <button className="h-[50px] mb-4">
        <div className="flex items-center p-1 hover:bg-slate-600 rounded-lg justify-between">
          <div className="flex justify-center items-center w-[150px] h-[50px]">
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
                srcset=""
              />
              <div className="border border-solid border-white bottom-1 right-[1px] absolute w-[7px] h-[7px] rounded bg-green-500"></div>
            </div>
            <div className="relative flex flex-col h-[50px] w-[100px]">
              <p className="text-[10px] absolute top-[8px]">Gabriel Marques</p>
              <p className="text-[8px] absolute top-[26px] text-gray-300">
                Escribiendo...
              </p>
            </div>
          </div>
          <ChatNewMessages isNewMessage={true} />
        </div>
      </button>
      <button className="h-[50px] mb-4">
        <div className="flex items-center p-1 hover:bg-slate-600 rounded-lg justify-between">
          <div className="flex justify-center items-center w-[150px] h-[50px]">
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
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/58ef74d4-eed1-47f9-b825-abed0371f0d9/deqbr9p-1ba60883-0171-4488-ad51-6683519d98e5.jpg/v1/fit/w_375,h_467,q_70,strp/sung_jin_woo_by_issashuzen_deqbr9p-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3NiIsInBhdGgiOiJcL2ZcLzU4ZWY3NGQ0LWVlZDEtNDdmOS1iODI1LWFiZWQwMzcxZjBkOVwvZGVxYnI5cC0xYmE2MDg4My0wMTcxLTQ0ODgtYWQ1MS02NjgzNTE5ZDk4ZTUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hIaDzTwvATkJDuA_0pswbKYkVvTQCmcK-En__IziGRU"
                alt=""
                srcset=""
              />
              <div className="border border-solid border-white bottom-1 right-[1px] absolute w-[7px] h-[7px] rounded bg-green-500"></div>
            </div>
            <div className="relative flex flex-col h-[50px] w-[100px]">
              <p className="text-[10px] absolute top-[8px]">Alex Rojas</p>
              <p className="text-[8px] absolute top-[26px] text-gray-300">
                klk
              </p>
            </div>
          </div>
          <ChatNewMessages isNewMessage={false} />
        </div>
      </button>
      <button className="h-[50px] mb-4">
        <div className="flex items-center p-1 hover:bg-slate-600 rounded-lg justify-between">
          <div className="flex justify-center items-center w-[150px] h-[50px]">
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdAFMTWhsRsf33HIUDvY_I9utoHbRsxYo_ounByocQaa_ruBXRaVyWf_T-bMOr7O71eQ&usqp=CAU"
                alt=""
                srcset=""
              />
              <div className="border border-solid border-white bottom-1 right-[1px] absolute w-[7px] h-[7px] rounded bg-green-500"></div>
            </div>
            <div className="relative flex flex-col h-[50px] w-[100px]">
              <p className="text-[10px] absolute top-[8px]">Mael Carrero</p>
              <p className="text-[8px] absolute top-[26px] text-gray-300">
                Mandame la clase...
              </p>
            </div>
          </div>
          {/* <ChatNewMessages isNewMessage={true} /> */}
        </div>
      </button>
      <button className="h-[50px] mb-4">
        <div className="flex items-center p-1 hover:bg-slate-600 rounded-lg justify-between">
          <div className="flex justify-center items-center w-[150px] h-[50px]">
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
                src="https://i.pinimg.com/originals/66/9c/68/669c68af00d49891e2f3c78c539862da.png"
                alt=""
                srcset=""
              />
              <div className="border border-solid border-white bottom-1 right-[1px] absolute w-[7px] h-[7px] rounded bg-green-500"></div>
            </div>
            <div className="relative flex flex-col h-[50px] w-[100px]">
              <p className="text-[10px] absolute top-[8px]">Joel Martes</p>
              <p className="text-[8px] absolute top-[26px] text-gray-300">
                tu: Dile que si...
              </p>
            </div>
          </div>
          <ChatNewMessages isNewMessage={true} />
        </div>
      </button>
      <button className="h-[50px] mb-4">
        <div className="flex items-center p-1 hover:bg-slate-500 bg-slate-500 rounded-lg justify-between">
          <div className="flex justify-center items-center w-[150px] h-[50px]">
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
                src="https://pbs.twimg.com/media/Eg1pSFaX0AELNdR.jpg"
                alt=""
                srcset=""
              />
              <div className="border border-solid border-white bottom-1 right-[1px] absolute w-[7px] h-[7px] rounded bg-green-500"></div>
            </div>
            <div className="relative flex flex-col h-[50px] w-[100px]">
              <p className="text-[10px] absolute top-[8px]">Manuel Mejia</p>
              <p className="text-[8px] absolute top-[26px] text-gray-300">
                Escribiendo...
              </p>
            </div>
          </div>
          {/* <ChatNewMessages isNewMessage={true} /> */}
        </div>
      </button>
    </div>
  );
};
