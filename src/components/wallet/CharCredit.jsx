import { useState } from "react";
import { Card, LineChart, Title } from "@tremor/react";

import { useCreditCard } from "../../hooks";

export const CharCredit = () => {
  const [value, setValue] = useState(null);
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
          colors={["blue", "indigo"]}
          yAxisWidth={30}
          onValueChange={(v) => setValue(v)}
          connectNulls={true}
        />
      </Card>
    </>
  );
};
