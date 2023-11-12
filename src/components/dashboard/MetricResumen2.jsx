import {
  Card,
  Title,
  Text,
  AreaChart,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import { FilterGrafitComponent } from "../FilterGrafitComponent";
import { useFilterGrafig } from "../../hooks";

const data = [
  {
    time: new Date(2023, 1, 1, 15, 17),
    Ingresos: 121,
    Gastos: 4,
  },
  {
    time: new Date(2023, 0, 5, 20, 34),
    Ingresos: 5,
    Gastos: 20,
  },
  {
    time: new Date(2023, 0, 7, 23, 30),
    Ingresos: 11,
    Gastos: 20,
  },
  {
    time: new Date(2023, 0, 10, 2, 26),
    Ingresos: 9,
    Gastos: 21,
  },
  {
    time: new Date(2023, 0, 3, 11, 4),
    Ingresos: 50,
    Gastos: 12,
  },
  {
    time: new Date(2023, 3, 1, 10, 30),
    Ingresos: 53,
    Gastos: 10,
  },
  {
    time: new Date(2023, 3, 1, 11, 26),
    Ingresos: 30,
    Gastos: 0,
  },
  {
    time: new Date(2023, 3, 2, 2, 11),
    Ingresos: 74,
    Gastos: 0,
  },
  // Agrega más datos diarios aquí
];

data.sort((a, b) => a.time - b.time);

export const MetricResumen2 = () => {
  const {
    formatDataForChart,
    dataFormatter,
    getFilteredData,
    selectedPeriod,
    setSelectedPeriod,
  } = useFilterGrafig(data);

  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <TabGroup index={selectedPeriod} onIndexChange={setSelectedPeriod}>
        <FilterGrafitComponent />
        <TabPanels>
          {["1D", "1W", "1M", "3M", "6M", "1Y"].map((period) => (
            <TabPanel key={period}>
              <AreaChart
                style={{ height: "262px" }}
                data={formatDataForChart(getFilteredData(period), period)}
                index="time"
                categories={["Ingresos", "Gastos"]}
                colors={["indigo", "fuchsia"]}
                valueFormatter={dataFormatter}
                showLegend={false}
                showGridLines={true}
                yAxisWidth={48}
                curveType="monotone"
                showXAxis={true}
                showYAxis={true}
              />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </Card>
  );
};
