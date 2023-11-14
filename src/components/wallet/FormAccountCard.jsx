import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { addCreditCard } from "../../store/creditCards/slice";

export const FormAccountCard = ({ type }) => {
  const [dataCard, setDataCard] = useState({
    id: Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000,
    cardCreditName: "",
    cardCreditLastName: "",
    bankname: "",
    cardNumber: "",
    type: type,
    cardTitle: "",
    month: 0,
    year: 0,
    cardCCV: "",
    amount: "",
    income: 0,
    outcome: 0,
    incomeResumen: [],
    outcomeResumen: [],
    cardDiseing: "./istockphoto-1323860984-612x612.jpg",
    showInfo: false,
    showDetail: false,
    typeCard: "Débito",
    selected: false,
    transitionDate: [],
    showCard: true,
    metric: [],
    metriCosts: [],
  });

  const Dispatch = useAppDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cardCreditName") {
      setDataCard({ ...dataCard, [name]: value, cardTitle: `${value} Cuenta` });
    } else {
      setDataCard({ ...dataCard, [name]: value });
    }
  };

  const handleSubmit = () => {
    // const nuevaTarjeta = {
    //   id: dataCard.id,
    //   cardCreditName: dataCard.cardCreditName,
    //   cardCreditLastName: dataCard.cardCreditLastName,
    //   bankname: dataCard.bankname,
    //   cardNumber: dataCard.cardNumber,
    //   type: dataCard.type,
    //   cardTitle: dataCard.cardTitle,
    //   month: dataCard.month,
    //   year: dataCard.year,
    //   cardCCV: dataCard.cardCCV,
    //   amount: dataCard.amount,
    //   income: dataCard.income,
    //   incomeResumen: dataCard.incomeResumen,
    //   outcome: dataCard.outcome,
    //   outcomeResumen: dataCard.outcomeResumen,
    //   cardDiseing: dataCard.cardDiseing,
    //   showInfo: dataCard.showInfo,
    //   showDetail: dataCard.showDetail,
    //   typeCard: dataCard.typeCard,
    //   selected: dataCard.selected,
    //   transitionDate: dataCard.transitionDate,
    //   metric: dataCard.metric,
    //   metriCosts: dataCard.metriCosts
    // };
    Dispatch(addCreditCard(dataCard));
  };
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full mx-auto">
        <div className="flex items-center flex-col">
          <div className="w-full xl:w-3/4 justify-center lg:w-11/12 flex">
            <div className="w-full lg:w-7/12 bg-gray-900 p-5 rounded-lg rounded-t-none">
              <form className="px-8 mb-4 bg-gray-900 rounded">
                <div className=" md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-400"
                      htmlFor="firstName"
                    >
                      Nombre
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      name="cardCreditName"
                      placeholder="Nombre"
                      value={dataCard.cardCreditName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-400"
                      htmlFor="lastName"
                    >
                      Apellido
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      name="cardCreditLastName"
                      placeholder="Apellido"
                      value={dataCard.cardCreditLastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-400"
                    htmlFor="numberCard"
                  >
                    Numero de tarjeta
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="numberCard"
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9874 1543"
                    value={dataCard.cardNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-400"
                      htmlFor="mes"
                    >
                      Mes
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="mes"
                      type="text"
                      placeholder="mes"
                      name="month"
                      value={dataCard.month}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-400"
                      htmlFor="year"
                    >
                      Año
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="year"
                      type="text"
                      name="year"
                      placeholder="2000"
                      value={dataCard.year}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-400"
                      htmlFor="cvv"
                    >
                      CVV
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="cardCCV"
                      type="text"
                      placeholder="000"
                      name="cardCCV"
                      value={dataCard.cardCCV}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-400"
                    htmlFor="monto"
                  >
                    Monto
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="monto"
                    type="text"
                    placeholder="100.00"
                    name="amount"
                    value={dataCard.amount}
                    onChange={handleChange}
                  />
                </div>
                <input
                  onClick={handleSubmit}
                  className="w-full h-[60px] text-center cursor-pointer mb-2 hover:bg-[#1565a0] duration-300 p-2 rounded-lg text-white bg-[#1976D2]"
                  type="button"
                  value="Crear"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
