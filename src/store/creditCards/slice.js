import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 321,
    cardCreditName: "Jorge Coca",
    bankname: "BHD",
    type: "Cuenta bancaria",
    cardTitle: "",
    income: 312.12,
    outcome: 0.0,
    cardDiseing:
      "https://media.istockphoto.com/id/1270261573/vector/abstract-blue-vector-background-with-stripes-can-be-used-for-cover-design-poster-and.jpg?s=612x612&w=0&k=20&c=pT278vElVdPXjAtgAPLVu6ZHMQnMiKq0aiwWY-RgyoA=",
    cardNumber: "4532 1341 3531 3414",
    cardCCV: 431,
    cardDate: "21/03",
    amout: 25943.5,
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
      },
      {
        origin: "Youtube",
        categoria: "Entretenimiento",
        date: "25/7/2023",
        amout: "19.99",
      },
      {
        categoria: "Entretenimiento",
        origin: "Facebook",
        date: "23/7/2023",
        amout: "59.99",
      },
      {
        categoria: "Entretenimiento",
        origin: "Youtube",
        date: "20/7/2023",
        amout: "49.99",
      },
    ],
    metric: [
      {
        date: "Jan 23",
        Ingreso: 100,
        Gasto: 78,
      },
      {
        date: "Feb 23",
        Ingreso: 52,
        Gasto: 71,
      },
      {
        date: "Mar 23",
        Ingreso: 48,
        Gasto: 80,
      },
      {
        date: "Apr 23",
        Ingreso: 61,
        Gasto: 65,
      },
      {
        date: "May 23",
        Ingreso: 55,
        Gasto: 58,
      },
      {
        date: "Jun 23",
        Ingreso: 67,
        Gasto: 62,
      },
      {
        date: "Jul 23",
        Ingreso: 60,
        Gasto: 54,
      },
      {
        date: "Aug 23",
        Ingreso: 72,
        Gasto: 49,
      },
      {
        date: "Sep 23",
        Ingreso: 65,
        Gasto: 52,
      },
      {
        date: "Oct 23",
        Ingreso: 68,
        Gasto: 53,
      },
      {
        date: "Nov 23",
        Ingreso: 74,
        Gasto: 21,
      },
      {
        date: "Dec 23",
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
  },
});

export default creditCardsSlice.reducer;
export const { updateCreditCard, updateOtherCreditCards, toggleShowDetail, creditCardsReducer } =
  creditCardsSlice.actions;
