import { useAppSelector } from "./useStore";

export const useCreditCard = () => {

  const formatNumber = (number) => {
      return number.toLocaleString('es-DO', {
        useGrouping: true,
        minimumFractionDigits: 2,
      });
    };

   const getAllCreditCards = () => {
    return useAppSelector((state) => state.creditCards);
   }

   const getSelectedCreditCard = (cards) => {
    return cards?.find((card) => card.selected === true);
   }
  
    return {
      formatNumber,
      getAllCreditCards,
      getSelectedCreditCard
    };
  };
  