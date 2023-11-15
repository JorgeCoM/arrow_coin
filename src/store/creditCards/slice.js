import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 321,
    cardCreditName: "Jorge",
    cardCreditLastName: "Coca",
    bankname: "BHD",
    type: "Cuenta virtual",
    cardTitle: "Demo",
    income: 312.12,
    incomeResumen: [1454.52, 2642.20],
    outcomeResumen: [467.31, 674.67],
    outcome: 0.0,
    // cardDiseing: "./background-design-background-6tgpche84avnjqvz.jpg",
    cardNumber: "4532 1341 3531 3414",
    cardCCV: 431,
    month: "21",
    year: "2028",
    amount: 100,
    showCard: true,
    showInfo: false,
    showDetail: false,
    typeCard: "Débito",
    selected: true,
    transitionDate: [
      {
        categoria: "Entretenimiento",
        origin: "Twitch",
        date: "25/7/2023",
        amout: "9.99",
        estado: {
          type: "completado",
          style: "#008f39",
        },
      },
      {
        categoria: "Entretenimiento",
        origin: "Youtube",
        date: "25/7/2023",
        amout: "19.99",
        estado: {
          type: "pendiente",
          style: "#EAB308",
        },
      },
      {
        categoria: "Entretenimiento",
        origin: "Facebook",
        date: "23/7/2023",
        amout: "59.99",
        estado: {
          type: "rechazado",
          style: "#B52527",
        },
      },
      {
        categoria: "Entretenimiento",
        origin: "Youtube",
        date: "20/7/2023",
        amout: "49.99",
        estado: {
          type: "completado",
          style: "#008f39",
        },
      },
      {
        categoria: "Restaurante",
        origin: "Comedor el flaco",
        date: "8/7/2023",
        amout: "608.30",
        estado: {
          type: "completado",
          style: "#008f39",
        },
      },
    ],
    metriCosts: [
      {
        Month: "Enero 21",
        Ingreso: 2890,
        Gasto: 2400,
        // Resumen: 4938,
      },
      {
        Month: "Febrero 21",
        Ingreso: 1890,
        Gasto: 1398,
        // Resumen: 2938,
      },
    ],
    metric: [
      {
        time: new Date(2023, 1, 1, 15, 17),
        Ingreso: 100,
        Gasto: 78,
      },
      {
        time: new Date(2023, 0, 5, 20, 34),
        Ingreso: 52,
        Gasto: 71,
      },
      {
        time: new Date(2023, 0, 7, 23, 30),
        Ingreso: 48,
        Gasto: 80,
      },
      {
        time: new Date(2023, 0, 10, 2, 26),
        Ingreso: 61,
        Gasto: 65,
      },
      {
        time: new Date(2023, 0, 3, 11, 4),
        Ingreso: 55,
        Gasto: 58,
      },
      {
        time: new Date(2023, 3, 1, 10, 30),
        Ingreso: 67,
        Gasto: 62,
      },
      {
        time: new Date(2023, 3, 1, 11, 26),
        Ingreso: 60,
        Gasto: 54,
      },
      {
        time: new Date(2023, 3, 2, 2, 11),
        Ingreso: 72,
        Gasto: 49,
      },
      {
        time: new Date(2023, 5, 3, 2, 11),
        Ingreso: 65,
        Gasto: 52,
      },
      {
        time: new Date(2023, 5, 10, 2, 11),
        Ingreso: 68,
        Gasto: 53,
      },
      {
        time: new Date(2023, 5, 14, 2, 11),
        Ingreso: 74,
        Gasto: 21,
      },
      {
        time: new Date(2023, 5, 23, 2, 11),
        Ingreso: 71,
        Gasto: 75,
      },
    ],
  },
];

export const creditCardsSlice = createSlice({
  name: "creditCards",
  initialState,
  reducers: {
    updateCreditCard: (state, action) => {
      const { index, updates } = action.payload;
      state[index] = { ...state[index], ...updates };
    },
    updateOtherCreditCards: (state, action) => {
      const { currentIndex, updates } = action.payload;
      return state.map((card, index) => {
        if (index !== currentIndex) {
          return { ...card, ...updates };
        }
        return card;
      });
    },
    toggleShowDetail: (state) => {
      const selectedCard = state.find((card) => card.selected === true);
      if (selectedCard) {
        selectedCard.showDetail = !selectedCard.showDetail;
      }
    },
    addCreditCard: (state, action) => {
      const newCreditCard = action.payload;
      return [...state, newCreditCard]
    },
  },
});

export default creditCardsSlice.reducer;
export const {
  updateCreditCard,
  updateOtherCreditCards,
  toggleShowDetail,
  addCreditCard,
} = creditCardsSlice.actions;
