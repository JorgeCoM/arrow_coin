import { CreditCard, CreditDetail } from "../../components";
import { CreditDisplayCards } from "../../components/wallet/CreditDisplayCards";
import { CreditTable } from "../../components/wallet/CreditTable";
import { useCreditCard } from "../../hooks";

export const Wallet = () => {
  const {getAllCreditCards} = useCreditCard()
  const cards = getAllCreditCards()

const cardSelected = cards.find((item) => item.selected !== false)

  return (
    <>
      <div className="w-full grid grid-cols-12">
        <div className="col-span-4">
          <CreditDisplayCards/>
        </div>
        <div className="flex flex-col col-span-8">
          <div className="bg-gray-900 p-3 rounded-md w-full h-[300px]">
            <div className="w-full flex h-full">
              <div className="w-full h-[270px]">
                <CreditDetail/>
              </div>
              <div className="absolute right-[30px]">
                <CreditCard selectedInfo={cardSelected ? cardSelected  : ''} maxWidth={320} maxHeight={190} showCardInfo={true} />
              </div>
            </div>
          </div>
            <div className="w-full px-2 h-[210px]">
              <CreditTable/>
            </div>
        </div>
      </div>
    </>
  );
};
