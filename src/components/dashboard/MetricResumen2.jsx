import {
  Card,
  AreaChart,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import { FilterGrafitComponent } from "../FilterGrafitComponent";
import { useCreditCard, useFilterGrafig } from "../../hooks";

export const MetricResumen2 = () => {

  const {getAllCreditCards, getSelectedCreditCard} = useCreditCard()
  const cards = getAllCreditCards()
  const cardSelected = getSelectedCreditCard(cards)

  const sortedMetric = cardSelected?.metric?.slice().sort((a, b) => a.time - b.time) || [];


  const {
    formatDataForChart,
    dataFormatter,
    getFilteredData,
    selectedPeriod,
    setSelectedPeriod,
  } = useFilterGrafig(sortedMetric);
  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <TabGroup index={selectedPeriod} onIndexChange={setSelectedPeriod}>
        <FilterGrafitComponent />
        <TabPanels>
          {["1D", "1W", "1M", "3M", "6M", "1Y"].map((period) => (
            <TabPanel key={period}>
              <AreaChart
                style={{ height: "262px", width: "100%" }}
                data={formatDataForChart(getFilteredData(period), period)}
                index="time"
                categories={["Ingreso", "Gasto"]}
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
