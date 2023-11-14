import { useAppDispatch, useCreditCard  } from "../../hooks";
import { toggleShowDetail } from "../../store/creditCards/slice";

export const CreditDetail = () => {
  const {getAllCreditCards, getSelectedCreditCard, formatNumber} = useCreditCard()

  const cards = getAllCreditCards()
  const creditSelected = getSelectedCreditCard(cards)

  const Dispatch = useAppDispatch();

  const handleCardToggleInfo = () => {
    Dispatch(toggleShowDetail());
  };

  const isLock = true

  return (
    <div className="flex px-2 flex-col">
      <p className="text-3xl ">${formatNumber(creditSelected.amout)}</p>
      <div className="flex pt-5 z-50 w-full">
        {/* <div className="m-1">
          <button
            className=" bg-gray-300 transition w-[120px] duration-300 ease-in-out hover:bg-gray-500 bg-opacity-25 p-2"
            type="button"
          >
            Depositar
          </button>
        </div> */}
        <div>
          <button
            className=" bg-gray-300 transition w-[120px] duration-300 ease-in-out hover:bg-gray-500 bg-opacity-25 p-2"
            type="button"
          >
            Transferir
          </button>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="flex mr-4 flex-col">
          <p className="text-sm">Ultima actividad</p>
          <p>${formatNumber(creditSelected.income)}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">Transito</p>
          <p>${formatNumber(creditSelected.outcome)}</p>
        </div>
      </div>
      <div className="flex justify-between w-full border-t mt-12 py-6 border-gray-600">
        <button className="flex">
          <i className="bx iconGg bx-cog mr-1 text-white"></i>
          <p className="">Configuración</p>
        </button>
        <button className="flex">
          <i className="bx iconGg bx-info-circle mr-1 text-white"></i>
          <p onClick={() => handleCardToggleInfo()} >
            {creditSelected.showDetail ? "Ocultar información" : "Mostrar información"}
          </p>
        </button>
        <button className="flex">
          <i className="bx iconGg bx-lock-alt mr-1 text-white"></i>
          <p className=" z-50">Códigos pin</p>
        </button>
        <button className="flex">
          <i className={`${isLock ? "bx bx-lock-alt" : "bx bx-lock-open-alt" } iconGg mr-1 text-white`}></i>
          <p className=" z-50">{isLock ? "Desbloquear" : 'Bloquear'}</p>
        </button>
      </div>
    </div>
  );
};
