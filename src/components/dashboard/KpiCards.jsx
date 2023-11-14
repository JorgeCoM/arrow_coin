import {
  Card,
  AreaChart,
  // DeltaType,
  Grid,
} from "@tremor/react";
import { useCreditCard } from "../../hooks";
import { KpiCardsHeader } from "./KpiCardsHeader";

const categories = [
  {
    title: "Ingreso",
    metric: "$ 12,699",
    metricPrev: "$ 9,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Gasto",
    metric: "$ 12,348",
    metricPrev: "$ 10,456",
    delta: "18.1%",
    deltaType: "moderateIncrease",
  },
  // {
  //   title: "Resumen",
  //   metric: "948",
  //   metricPrev: "1,082",
  //   delta: "12.3%",
  //   deltaType: "moderateDecrease",
  // },
];

const valueFormatter = (number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

export const KpiCards = () => {
  const { getAllCreditCards, getSelectedCreditCard } = useCreditCard();
  const cards = getAllCreditCards();
  const cardSelected = getSelectedCreditCard(cards);

  return (
    <Grid numItemsSm={2} numItemsLg={2} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          {cardSelected.incomeResumen <= 0 ? <></>  :<KpiCardsHeader title={item.title} deltaType={item.deltaType} delta={item.delta} />}
          <AreaChart
            className="h-28"
            data={cardSelected.metriCosts}
            index="Month"
            valueFormatter={valueFormatter}
            categories={[item.title]}
            colors={["blue"]}
            showXAxis={true}
            showGridLines={false}
            startEndOnly={true}
            showYAxis={false}
            showLegend={false}
          />
        </Card>
      ))}
    </Grid>
  );
};
