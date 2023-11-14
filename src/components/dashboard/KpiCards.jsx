import {
  Card,
  Metric,
  Text,
  AreaChart,
  BadgeDelta,
  Flex,
  // DeltaType,
  Grid,
} from "@tremor/react";

const data = [
  {
    Month: "Enero 21",
    Ingresos: 2890,
    Gastos: 2400,
    // Resumen: 4938,
  },
  {
    Month: "Febrero 21",
    Ingresos: 1890,
    Gastos: 1398,
    // Resumen: 2938,
  },
  // ...
  {
    Month: "Julio 21",
    Ingresos: 3490,
    Gastos: 4300,
    // Resumen: 2345,
  },
];

const categories = [
  {
    title: "Ingresos",
    metric: "$ 12,699",
    metricPrev: "$ 9,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Gastos",
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
  return (
    <Grid numItemsSm={2} numItemsLg={2} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Flex alignItems="start">
            <Text>{item.title}</Text>
            <BadgeDelta deltaType={item.deltaType}>
              <span className="text-black">{item.delta}</span>
            </BadgeDelta>
          </Flex>
          <Flex
            className="space-x-3 truncate"
            justifyContent="start"
            alignItems="baseline"
          >
            <Metric style={{ fontSize: "20px" }}>{item.metric}</Metric>
            <Text>desde {item.metricPrev}</Text>
          </Flex>
          <AreaChart
            className="h-28"
            data={data}
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
