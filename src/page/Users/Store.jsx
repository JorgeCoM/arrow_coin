import { NavCarrusel } from "../../components/storeComponents/NavCarrusel";

export const Store = () => {
  return (
    <div className="mt-8 grid grid-cols-12 w-full h-[510px]">
      <div className="m-4 ml-20 lg:ml-0 sm:ml-0 col-span-9 flex flex-col rounded-xl">
        {/* <div className="bg-gray-900 w-full pt-4 rounded-xl h-[260px]"> */}
        {/* <NavCarrusel /> */}
        {/* </div> */}
        <div>
          <div className="grid h-[200px] gap-2 grid-cols-3">
            <div className="bg-gray-900 col-span-2 h-[500px] p-3 rounded-xl mt-4">
              {/* <div className="bg-green-500 w-full rounded-xl h-[100%]"></div> */}
              <iframe
                src="https://www.youtube.com/embed/subDEWVxKGM?si=VvebKN36DtknGaiO"
                title="custom page redirect"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                width={'600px'}
              ></iframe>
            </div>
            <div className="bg-gray-900 col-span-1 h-full p-3 rounded-xl mt-4">
              <div className="bg-green-500 w-full rounded-xl h-[70%]"></div>
            </div>
            {/* <div className="bg-gray-900 col-span-1 h-full p-3 rounded-xl mt-4">
              <div className="bg-green-500 w-full rounded-xl h-[70%]"></div>
            </div> */}
          </div>
          <div className="grid mt-3 h-[200px] gap-2 grid-cols-3">
            <div className="bg-gray-900 col-span-1 h-full p-3 rounded-xl mt-4">
              <div className="bg-green-500 w-full rounded-xl h-[70%]"></div>
            </div>
            <div className="bg-gray-900 col-span-1 h-full p-3 rounded-xl mt-4">
              <div className="bg-green-500 w-full rounded-xl h-[70%]"></div>
            </div>
            <div className="bg-gray-900 col-span-1 h-full p-3 rounded-xl mt-4">
              <div className="bg-green-500 w-full rounded-xl h-[70%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 h-[475px] m-4 col-span-3 rounded-xl"></div>
    </div>
  );
};
