import { Card, LineChart, Title } from "@tremor/react";

import { useCreditCard } from "../../hooks";

export const CharCredit = () => {
  const { getAllCreditCards, getSelectedCreditCard } = useCreditCard();

  const cards = getAllCreditCards();
  const selectedCard = getSelectedCreditCard(cards);
  return (
    <>
      <Card>
        <Title>Resumen de la cuenta</Title>
        <LineChart
          className="h-[223px] w-full"
          data={selectedCard.metric}
          index="date"
          categories={["Ingreso", "Gasto"]}
          colors={["green", "red"]}
          yAxisWidth={30}
          connectNulls={true}
        />
      </Card>
    </>
  );
};
