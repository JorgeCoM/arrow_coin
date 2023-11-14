import {
  Metric,
  Text,
  BadgeDelta,
  Flex,
  // DeltaType,
} from "@tremor/react";
import { useCreditCard } from "../../hooks";

export const KpiCardsHeader = ({title, deltaType, delta}) => {
  const { getAllCreditCards, getSelectedCreditCard } = useCreditCard();
  const cards = getAllCreditCards();
  const cardSelected = getSelectedCreditCard(cards);

  const inComeLastIndex = cardSelected?.incomeResumen.length - 1;
  const outComeLastIndex = cardSelected?.outcomeResumen.length - 1;

  return (
    <>
      <Flex alignItems="start">
        <Text>{title}</Text>
        <BadgeDelta deltaType={deltaType}>
          <span className="text-black">{delta}</span>
        </BadgeDelta>
      </Flex>
      <Flex
        className="space-x-3 truncate"
        justifyContent="start"
        alignItems="baseline"
      >
        <Metric style={{ fontSize: "20px" }}>
          {cardSelected?.incomeResumen[inComeLastIndex]}
        </Metric>
        <Text>desde {cardSelected?.outcomeResumen[outComeLastIndex]}</Text>
      </Flex>
    </>
  );
};
