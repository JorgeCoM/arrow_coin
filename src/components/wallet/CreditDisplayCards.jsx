import { useCreditCard } from "../../hooks";
import { CreditDisplayCardsItems } from "./CreditDisplayCardsItems";

export const CreditDisplayCards = () => {
  const { getAllCreditCards } = useCreditCard()

  const cards = getAllCreditCards()

  return (
    <div className="px-4 overflow-y-auto max-h-[470px] h-full">
      {cards.map((item, index) => <CreditDisplayCardsItems key={item.id} item={item} index={index}/>)}
    </div>
  );
};
