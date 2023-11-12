import React from "react";
import { CreditTableItems } from "./CreditTableItems";
import { useCreditCard } from "../../hooks";

export const CreditTable = () => {
  const { getAllCreditCards, getSelectedCreditCard } = useCreditCard();
  const cards = getAllCreditCards();
  const cardSelected = getSelectedCreditCard(cards);

  return (
    <table className="table-auto mt-2 w-full">
      <thead>
        <tr className="table__th">
          <th className="px-4 py-2 text-center">Origen</th>
          <th className="px-4 py-2 text-center">Fecha</th>
          <th className="px-4 py-2 text-center">Monto</th>
        </tr>
      </thead>
      <tbody>
        {cardSelected.transitionDate.map((item, index) => {
          const id = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
          return <CreditTableItems key={id} index={index} item={item} />;
        })}
      </tbody>
    </table>
  );
};
