import { CreditCardFront } from "./CreditCardFront";

export const CreditCard = ({ maxWidth, maxHeight, showCardInfo, selectedInfo }) => {
  const cardStyle = {
    backgroundImage: `url(${selectedInfo.cardDiseing})`,
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
