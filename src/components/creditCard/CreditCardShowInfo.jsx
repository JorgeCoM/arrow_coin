import { shipCard } from "../../assets";


export const CreditCardShowInfo = ({info}) => {
    return (
        <div className="relative w-full h-full">
          <div className="w-[310px] absolute left-[6px] bottom-[187px] z-40 flex flex-col h-full">
            <div className="flex justify-between w-full">
              <p className=" text-xl font-bold">{info.bankname}</p>
              <i className="bx bx-wifi iconGg rotate-90"></i>
            </div>
            <img
              style={{ width: "32px", height: "32px", margin: "20px 0 5px 0" }}
              src={shipCard}
              alt="ship card credit"
            />
            <div className="relative">
              <p className="text-[28px] mt-1">{info.cardNumber}</p>
              <div className="triangulo absolute top-[-40px] left-[255px]">
                <div className="relative no-opacity">
                  <p className="no-opacity absolute text-xs top-[-8px] rotate-180 left-[-58px]">
                    {info.typeCard}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-lg mt-1">{info.cardDate}</p>
              </div>
            </div>
            <div>
             <p> CVV: {info.cardCCV}</p>
            </div>
          </div>
        </div>
      );
}