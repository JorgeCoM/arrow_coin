import React from "react";
import { Card, Text, Metric, Icon, Divider, Flex, Grid } from "@tremor/react";
import { CashIcon, CreditCardIcon } from "@heroicons/react/solid";

const categories = [
  {
    title: "Resumen",
    metric: "$ 6,456",
    metricPrev: "1,234,567",
    icon: CashIcon,
    color: "cyan",
    footer: "1 - 27 Julio, 2023",
  },
  {
    title: "Tarjetas",
    metric: "3",
    metricPrev: "2",
    icon: CreditCardIcon,
    color: "cyan",
    footer: "",
  },
  {
    title: "Cuentas",
    metric: "0",
    metricPrev: "2",
    icon: CreditCardIcon,
    color: "cyan",
    footer: "Próximamente disponible",
  },
];

export const KpiCards = () => {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-11">
      {categories.map((item) => (
        <Card
          style={{ width: "240px", height: "160px" }}
          className="relative top-[-23px]"
          key={item.title}
          decoration="top"
          decorationColor={item.color}
        >
          <Flex justifyContent="start" className="space-x-4">
            <Icon
              icon={item.icon}
              variant="light"
              size="xl"
              color={item.color}
            />
            <div className="truncate">
              <Text color="white">{item.title}</Text>
              <Metric style={{ fontSize: "24px" }} className="truncate">
                {item.metric}
              </Metric>
            </div>
          </Flex>
          <Divider />
          <Text className="text-xs text-gray-300">{item.footer}</Text>
        </Card>
      ))}
    </Grid>
  );
};
