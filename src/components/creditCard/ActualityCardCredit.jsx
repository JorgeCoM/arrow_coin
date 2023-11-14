import { useCreditCard } from "../../hooks";

export const ActualityCardCredit = () => {
  const { getAllCreditCards, getSelectedCreditCard } = useCreditCard();

  const cards = getAllCreditCards();
  const selectedCard = getSelectedCreditCard(cards);
  console.log(cards)
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[40px] mb-10 flex justify-between items-center">
        <i className="bx bx-wifi-2 text-white text-[36px] rotate-90"></i>
        <i className="bx bxl-mastercard text-white text-[36px]"></i>
      </div>
      <div className="w-full mb-6 h-[18px]">
        <p className=" text-center font-bold text-[24px]">
          {selectedCard?.cardNumber}
        </p>
      </div>
      <div className="w-full h-full mb-4 flex justify-between items-center">
        <p className="mr-2">{selectedCard?.cardCreditName} </p>
      </div>
      <div className="w-full h-full flex justify-between items-center">
        <p className="mr2">{selectedCard?.month}/{selectedCard.year}</p>
        <p className="mr2">CCV:{selectedCard?.cardCCV}</p>
      </div>
    </div>
  );
};
