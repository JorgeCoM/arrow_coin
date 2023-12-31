import { useCreditCard } from "../../hooks/useCreditCard";
import { CreditCard } from "../../components/creditCard";
import {
  updateCreditCard,
  updateOtherCreditCards,
} from "../../store/creditCards/slice";
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
        <p className="text-[14px] text-white flex flex-col">
          {item.cardTitle === "" ? "Por defecto" : item?.cardTitle}
          <span className=" text-[10px] mt-1 font-light italic text-gray-300">
            {item?.type}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-[14px] text-white mr-2">
          ${formatNumber(item?.amount)}
        </p>
        <div
          style={item?.cardDiseing ? {
            backgroundImage: `url(${item?.cardDiseing})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100px",
            height: "70px"
          } : {}}
        >
          <div className="w-full rounded-lg opacity-[0.8] h-full"></div>
        </div>
      </div>
    </div>
  );
};
