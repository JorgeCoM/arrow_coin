import {  TabList, Tab } from "@tremor/react";

export const FilterGrafitComponent = () => {
  return (
    <TabList variant="line">
    <Tab>1D</Tab>
    <Tab>1W</Tab>
    <Tab>1M</Tab>
    <Tab>3M</Tab>
    <Tab>6M</Tab>
    <Tab>1Y</Tab>
  </TabList>
  )
}