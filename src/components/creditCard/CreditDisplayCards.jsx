import { NavLink } from "react-router-dom";
import { useCreditCard } from "../../hooks";
import { CreditDisplayCardsItems } from "./CreditDisplayCardsItems";

export const CreditDisplayCards = () => {
  const { getAllCreditCards } = useCreditCard();

  const cards = getAllCreditCards();
  // console.log(cards.length)

  return (
    <>
      <div className="p-2 mx-2 rounded-lg overflow-y-auto items-center max-h-[580px] flex flex-col bg-gray-900 h-full">
        {cards?.map((item, index) => (
          <CreditDisplayCardsItems key={item.id} item={item} index={index} />
        ))}
      </div>
      <div className=" bg-gray-900 mx-2 rounded-lg mt-2 flex justify-center p-2 ">
          <NavLink to={"/user/wallet/create"} className="w-[50px] hover:bg-[#1565a0] duration-300 h-[50px] justify-center rounded-full flex items-center bg-[#1976D2]">
            <i className="bx bx-plus text-white"></i>
          </NavLink>
      </div>
    </>
  );
};
