import {
  Card,
  List,
  ListItem,
  Icon,
  Text,
  Bold,
  Flex,
  Title,
} from "@tremor/react";

import {
  BriefcaseIcon,
  DesktopComputerIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/solid";


const Julio = [
  {
    name: "Comida",
    icon: ShoppingBagIcon,
    color: "teal",
    numTransactions: 32,
    amount: "$ 490",
  },
  {
    name: "Viaje",
    icon: BriefcaseIcon,
    color: "pink",
    numTransactions: 3,
    amount: "$ 678",
  },
  {
    name: "Entretenimiento",
    icon: DesktopComputerIcon,
    color: "orange",
    numTransactions: 2,
    amount: "$ 120",
  },
  {
    name: "Transporte",
    icon: TruckIcon,
    color: "indigo",
    numTransactions: 12,
    amount: "$ 560",
  },
];

const months = [
  {
    name: "Julio 2023",
    data: Julio,
  },
];

export const VolumeTransactions = () => {
  return (
    <div>
      {months.map((item) => (
        <Card style={{height: '360px' }}  key={item.name}>
          <Title>Transaciones mensuales</Title>
          <Text>{item.name}</Text>
          <List>
            {item.data.map((transaction) => (
              <ListItem className="py-4" key={transaction.name}>
                <Flex justifyContent="start" className="truncate space-x-4">
                  <Icon
                    variant="light"
                    icon={transaction.icon}
                    size="md"
                    color={transaction.color}
                  />
                  <div className="truncate">
                    <Text className="truncate">
                      <Bold>{transaction.name}</Bold>
                    </Text>
                    <Text className="truncate">
                      {`${transaction.numTransactions} Transaciones`}
                    </Text>
                  </div>
                </Flex>
                <Text>{transaction.amount}</Text>
              </ListItem>
            ))}
          </List>
        </Card>
      ))}
    </div>
  );
};
