export const CreditTableItems = ({ item, index }) => {
  return (
    <tr className={`${index % 2 === 0 ? "bg-gray-500" : ""}`}>
      <td className="px-4 py-2 flex items-center justify-center table__th">
        <i className={`${item?.icon} text-xl mr-2`}></i>
        <span>{item?.origin}</span>
      </td>
      <td className="px-4 py-2 table__th text-center">{item?.date}</td>
      <td className="px-4 py-2 table__th text-center">${item?.amout}</td>
    </tr>
  );
};
