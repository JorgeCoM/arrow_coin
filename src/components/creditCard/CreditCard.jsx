import { CreditCardFront } from "./CreditCardFront";
import { useCreditCard } from "../../hooks";


export const CreditCard = ({ maxWidth, maxHeight, showCardInfo }) => {
  const { getAllCreditCards, getSelectedCreditCard } = useCreditCard()


  const cards = getAllCreditCards()
  const selectedCard = getSelectedCreditCard(cards)

  // console.log(selectedInfo)
  const cardStyle = {
    backgroundImage: `url(${selectedCard?.cardDiseing})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: `${maxWidth}px`,
    height: `${maxHeight}px`,
  };
    return (
      <div>
        <div
          style={cardStyle}
          className="w-full rounded-lg opacity-[0.8] h-full"
        ></div>
        {showCardInfo ? <CreditCardFront /> : <></>}
      </div>
    );
};
