import React from "react";
import { KpiCards } from "../../components/dashboard/KpiCards";
import { MetricResumen2 } from "../../components";
import { ActualityCardCredit } from "../../components/wallet/ActualityCardCredit";
import { RemindenResume } from "../../components/reminder/RemindenResume";
import { useCreditCard } from "../../hooks";

export const Dashboard = () => {
  const { getAllCreditCards, getSelectedCreditCard, formatNumber } = useCreditCard();

  const cards = getAllCreditCards();
  const selectedCard = getSelectedCreditCard(cards);
  return (
    <div className="w-full h-screen">
      <div className="flex gap-3 h-[985px]">
        <div className="flex w-[850px] pb-3 flex-grow relative flex-col">
          <div className="w-full bg-[#25252c] rounded-lg h-[60px]">
            <div className="w-full flex items-center justify-between h-full">
              <h1 className="text-white">Dashboard</h1>
              <div className="relative h-[25px]">
                <input
                  className=" text-white outline-none rounded-lg pl-8 text-sm p-1 bg-gray-900"
                  type="search"
                  placeholder="buscar..."
                />
                <i className="bx bx-search text-white absolute left-2 top-2 text-[16px]"></i>
              </div>
            </div>
          </div>
          <div className="mb-4 justify-center">
            <KpiCards />
          </div>
          <div className="w-full flex">
            <div className="rounded-lg flex-grow">
              <MetricResumen2 />
            </div>
            {/* <div className="w-[295px] ml-5">
              <VolumeTransactions />
            </div> */}
          </div>
          <div className="w-full h-[300px] mt-4 rounded-lg bg-gray-900">
            <div className="mt-2 mb-2 h-[30px] ml-4 w-full">
              <h2 className="text-white text-[20px]">Historial</h2>
            </div>
            <div className="w-full h-[260px] px-4">
              <div className="w-full h-full flex flex-col">
                <div className="w-full flex justify-between items-center h-[60px]">
                  <i class="bx bx-credit-card text-[#1976D2] bg-gray-800 p-2 rounded-full"></i>
                  <p>Pagos Online</p>
                  <span className="p-2 text-green-600 font-bold rounded-lg">
                    Completado
                  </span>
                  <p>350.00</p>
                  <p>Netflix</p>
                  <p>23.8.2023. 15:30PM</p>
                </div>
                <div className="w-full flex text-center justify-between items-center h-[60px]">
                  <i class="bx bx-restaurant text-[#1976D2] bg-gray-800 p-2 rounded-full"></i>
                  <p>Restaurante</p>
                  <span className="p-2 text-green-600 font-bold rounded-lg">
                    Completado
                  </span>
                  <p>950.00</p>
                  <p>Casa vera</p>
                  <p>21.8.2022. 9:30PM</p>
                </div>
                <div className="w-full flex justify-between items-center h-[60px]">
                  <i class="bx bxs-chess text-[#1976D2] bg-gray-800 p-2 rounded-full"></i>
                  <p>juegos</p>
                  <span className="p-2 text-red-600 font-bold rounded-lg">
                    Rechazado
                  </span>
                  <p>50.00</p>
                  <p>Fornite</p>
                  <p>21.8.2022. 9:30PM</p>
                </div>
                <div className="w-full flex text-center justify-between items-center h-[60px]">
                  <i class="bx bx-credit-card text-[#1976D2] bg-gray-800 p-2 rounded-full"></i>
                  <p>Pagos online</p>
                  <span className="p-2 text-yellow-600 font-bold rounded-lg">
                    Pendiente
                  </span>
                  <p>20.00</p>
                  <p>Spotify</p>
                  <p>21.8.2022. 9:30PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#181a1e] w-[400px] h-full">
          <div className="w-full h-full flex flex-col px-8">
            <div className="w-full h-[60px] flex mt-4 items-center flex-row-reverse">
              {/* <div className="w-[35px] h-[30px] ml-2 flex rounded-md items-center justify-center bg-gray-600"></div> */}
              <div className="w-[110px] cursor-pointer h-[30px] flex rounded-md items-center justify-center">
                <div className="w-[30px] mr-1 h-[30px] rounded-full">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <p>Jorge</p>
                <i class="bx bx-chevron-down text-white"></i>
              </div>
              <div className="w-[35px] h-[30px] flex rounded-md cursor-pointer items-center justify-center mr-2 bg-gray-600 hover:bg-gray-700 duration-300">
                <i className="bx bx-bell text-[18px] text-white "></i>
              </div>
            </div>
            <div className="w-full h-[150px] my-2 mb-4 rounded-lg bg-gray-900">
              <div className="w-full h-full flex justify-between p-3">
                <div className="w-[150px] h-full justify-center flex flex-col">
                  <h2 className="text-gray-300 text-[14px] font-light">
                    Balance
                  </h2>
                  <p className="text-white text-[24px]"> ${formatNumber(selectedCard.amout)}</p>
                </div>
                <div className="h-full flex items-center">
                  <button className="py-2 px-3 bg-[#25252c] hover:bg-[#32323a] duration-300 rounded-lg">
                    Ver mas
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-[290px] mb-4 p-4 rounded-lg bg-gray-900">
              <ActualityCardCredit />
            </div>
            <div className="w-full h-full mb-4 p-6 rounded-lg bg-gray-900">
              <RemindenResume />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
