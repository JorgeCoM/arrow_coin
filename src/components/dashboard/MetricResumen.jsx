    import { Card, Metric, Text, AreaChart, BadgeDelta, Flex, Grid } from "@tremor/react";
    export const MetricResumen = ({ categories, data }) => {
        return (
          <Grid numItemsSm={1} numItemsLg={1} className="gap-3">
            {categories.map((item) => (
              <Card key={item.title}>
                <Flex alignItems="start">
                  <Text>{item.title}</Text>
                  <BadgeDelta deltaType={item.deltaType}></BadgeDelta>
                </Flex>
                <Flex
                  className=" truncate"
                  justifyContent="start"
                  alignItems="baseline"
                >
                  <Metric>{item.metric}</Metric>
                  <Text className="ml-1">anterior {item.metricPrev}</Text>
                </Flex>
                <AreaChart
                  className="h-28"
                  data={data}
                  index="Month"
                  valueFormatter={(number) =>
                    `$ ${Intl.NumberFormat("es-Do").format(number).toString()}`}
                  categories={[item.title]}
                  colors={["cyan"]}
                  showXAxis={false}
                  showGridLines={false}
                  startEndOnly={false}
                  showYAxis={false}
                  showLegend={false}
                />
              </Card>
            ))}
          </Grid>
        );
      };
      