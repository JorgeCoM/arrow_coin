import { useCreditCard } from "../../hooks/useCreditCard";
import { CreditCard } from "./CreditCard";
import { updateCreditCard, updateOtherCreditCards } from "../../store/creditCards/slice";
import { useAppDispatch } from "../../hooks";

export const CreditDisplayCardsItems = ({ item, index }) => {

  const { formatNumber } = useCreditCard();
  const Dispatch = useAppDispatch();

  const handleCardClick = () => {
    Dispatch(
      updateCreditCard({
        index: index,
        updates: { selected: true, showDetail: false }, 
      })
    );

    Dispatch(
      updateOtherCreditCards({
        currentIndex: index,
        updates: { selected: false },
      })
    );
  };

  return (
    <div
      onClick={() => handleCardClick()}
      className={`flex ${
        item.selected ? "bg-gray-400" : ""
      } mb-2 rounded-lg transition cursor-pointer p-2 duration-300 ease-in-out hover:bg-gray-500 bg-opacity-25 w-full justify-between`}
    >
      <div className="flex items-center">
        <p className="text-[14px]">
          {item.cardTitle === "" ? "Por defecto" : item.cardTitle}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-[14px] mr-2">${formatNumber(item.amout)}</p>
        <CreditCard
          selectedInfo={item}
          maxWidth={100}
          maxHeight={70}
          showCardInfo={false}
        />
      </div>
    </div>
  );
};
