export const CreditTableItems = ({ item, index }) => {
  return (
    <tr className={`${index % 2 === 0 ? "bg-gray-500" : ""}`}>
      <td className="px-4 py-2 flex items-center justify-center table__th">
        <span>{item?.origin}</span>
      </td>
      <td className="px-4 py-2 table__th text-center">{item?.categoria}</td>
      <td className="px-4 py-2 table__th text-center">${item?.amout}</td>
      <td className="px-4 py-2 table__th text-center">{item?.date}</td>

    </tr>
  );
};
