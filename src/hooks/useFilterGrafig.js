import { useState } from "react";
import { subDays, subWeeks, subMonths, subYears } from "date-fns";


export const useFilterGrafig = (data) => {
  const refIndex = data.length;

  const dataFormatter = (number) =>
    `$ ${Intl.NumberFormat("es-Do").format(number).toString()}`;

  const [selectedPeriod, setSelectedPeriod] = useState();
  let period;

  const filterData = (startDate, endDate) =>
    data.filter((item) => {
      const currentTime = item.time;
      return currentTime >= startDate && currentTime <= endDate;
    });

  const formatTime = (date) => {
    return date.toLocaleString("es-Do", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const formatDate = (date, selectedPeriod) => {
    switch (selectedPeriod) {
      case "1D":
        return formatTime(date);
      case "1W":
        return date.toLocaleString("es-Do", { weekday: "long" }); 
      case "1M":
      case "3M":
      case "6M":
      case "1Y":
        return date.toLocaleString("es-Do", { month: "long" }); 
      default:
        return date.toISOString(); 
    }
  };

  const formatDataForChart = (data, selectedPeriod) => {
    return data.map((item) => {
      return {
        time: formatDate(item.time, selectedPeriod),
        Ingresos: item.Ingresos,
        Gastos: item.Gastos,
      };
    });
  };

  const getFilteredData = (period) => {
    let periodStartDate;

    switch (period) {
      case "1D":
        periodStartDate = subDays(data[data.length - refIndex].time, 1);
        break;
      case "1W":
        periodStartDate = subWeeks(data[data.length - refIndex].time, 1);
        break;
      case "1M":
        periodStartDate = subMonths(data[data.length - refIndex].time, 1);
        break;
      case "3M":
        periodStartDate = subMonths(data[data.length - refIndex].time, 3);
        break;
      case "6M":
        periodStartDate = subMonths(data[data.length - 1].time, 6);
        break;
      case "1Y":
        periodStartDate = subYears(data[data.length - 1].time, 1);
        break;
      default:
        // Return all data if it doesn't match any case
        return data;
    }

    // Return the data filtered by day or month according to the period
    return filterData(periodStartDate, data[data.length - 1].time);
  };

  return {
    selectedPeriod,
    setSelectedPeriod,
    formatDataForChart,
    getFilteredData,
    dataFormatter,
    period
  };
};
