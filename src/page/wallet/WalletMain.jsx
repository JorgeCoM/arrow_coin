import { BadgeDelta } from "@tremor/react";
import { CharCredit } from "../../components/wallet/CharCredit";
import { useCreditCard } from "../../hooks";
import { CreditTable } from "../../components/wallet/CreditTable";

export const WalletMain = () => {
  const { getAllCreditCards, getSelectedCreditCard, formatNumber } =
    useCreditCard();

  const cards = getAllCreditCards();
  const cardSelected = getSelectedCreditCard(cards);

  return (
    <>
      <div className="w-full gap-4 h-[300px] flex">
        <div className="w-[50%] p-3 h-full rounded-lg flex bg-gray-900 flex-col">
          <div className="w-full mb-8 flex justify-between h-14">
            <h2 className="text-white text-[20px]">Balance Total</h2>
            <div>
              <BadgeDelta
                deltaType="moderateIncrease"
                className="mx-2"
                isIncreasePositive={true}
                size="xs"
              >
                <p className="text-black">$400</p>
              </BadgeDelta>
              <BadgeDelta
                deltaType="moderateDecrease"
                isIncreasePositive={true}
                size="xs"
              >
                <p className="text-black">$231</p>
              </BadgeDelta>
            </div>
          </div>
          <div className="w-full mb-8 text-center h-14">
            <p className="text-[26px] text-white font-bold">
              ${formatNumber(cardSelected.amout)}
            </p>
          </div>
          <div className="w-full h-16 flex justify-between">
            <button className="bg-[#1976D2] hover:bg-[#2f6194] duration-300 px-11 rounded-3xl">
              Depositar
            </button>
            <button className="bg-gray-300 text-black px-11 rounded-3xl">
              Transferir
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <CharCredit />
        </div>
      </div>
      <div className="w-full h-[210px]">
        <CreditTable />
      </div>
    </>
  );
};
