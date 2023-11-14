import React from "react";
import { CreditTableItems } from "./CreditTableItems";
import { useCreditCard } from "../../hooks";

export const CreditTable = () => {
  const { getAllCreditCards, getSelectedCreditCard } = useCreditCard();
  const cards = getAllCreditCards();
  const cardSelected = getSelectedCreditCard(cards);

  if (cardSelected.transitionDate.length === 0) {
    return (
      <div className="w-full h-[265px] mt-2 p-6 rounded-lg">
        <div className="w-full h-full justify-center items-center flex border-[1px] rounded-xl border-white border-dashed p-4">
          <h3 className="text-gray-500 text-[14px]">No data</h3>
        </div>
      </div>
    );
  } else {
    return (
      <table className="table-auto mt-2 rounded-lg w-full">
        <thead>
          <tr className="table__th">
            <th className="px-4 py-2 text-center">Origen</th>
            <th className="px-4 py-2 text-center">Categoria</th>
            <th className="px-4 py-2 text-center">Estado</th>
            <th className="px-4 py-2 text-center">Monto</th>
            <th className="px-4 py-2 text-center">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {cardSelected.transitionDate.map((item, index) => {
            const id = Math.floor(Math.random() * 1000000)
              .toString()
              .padStart(6, "0");
            return <CreditTableItems key={id} index={index} item={item} />;
          })}
        </tbody>
      </table>
    );
  }
};
