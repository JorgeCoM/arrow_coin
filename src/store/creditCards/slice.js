import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 321,
        cardCreditName: 'Jorge Coca',
        bankname: 'BHD',
        cardTitle: '',
        income: 312.12,
        outcome: 0.00,
        cardDiseing: 'https://media.istockphoto.com/id/1270261573/vector/abstract-blue-vector-background-with-stripes-can-be-used-for-cover-design-poster-and.jpg?s=612x612&w=0&k=20&c=pT278vElVdPXjAtgAPLVu6ZHMQnMiKq0aiwWY-RgyoA=',
        cardNumber: '4532 1341 3531 3414',
        cardCCV: 431,
        cardDate: '21/03',
        amout: 251.50,
        showInfo: false,
        showDetail: false,
        typeCard: 'Débito',
        selected: true,
        transitionDate: [
          {
            icon: 'bx bxl-twitch text-purple-700 mr-2',
            origin: 'Twitch',
            date: '25/7/2023',
            amout: '9.99'
          },
          {
            icon: 'bx bxl-youtube text-red-500 mr-2',
            origin: 'Youtube',
            date: '25/7/2023',
            amout: '19.99'
          },
          {
            icon: 'bx bxl-meta text-blue-600 mr-2',
            origin: 'Facebook',
            date: '23/7/2023',
            amout: '59.99'
          },
          {
            icon: 'bx bxl-youtube text-red-500 mr-2',
            origin: 'Youtube',
            date: '20/7/2023',
            amout: '49.99'
          }
        ]
    },
    {
        id: 123,
        cardCreditName: 'Jorge Coca',
        bankname: 'Popular',
        cardTitle: 'Trabajo',
        income: 112.14,
        outcome: 0.00,
        cardDiseing: 'https://static.vecteezy.com/system/resources/thumbnails/005/152/375/small/modern-futuristic-neon-purple-background-free-vector.jpg',
        cardNumber: '4532 1341 3531 3124',
        cardCCV: 231,
        cardDate: '21/03',
        amout: 2530.14,
        showInfo: false,
        showDetail: false,
        typeCard: 'Crédito',
        selected: false,
        transitionDate: [
          {
            icon: 'bx bxl-netlify text-cyan-600 mr-2',
            origin: 'Netlify',
            date: '25/7/2023',
            amout: '9.99'
          },
          {
            icon: 'bx bxl-aws text-orange-700 mr-2',
            origin: 'AWS',
            date: '25/7/2023',
            amout: '19.99'
          },
          {
            icon: 'bx bxl-meta text-blue-500 mr-2',
            origin: 'Facebook',
            date: '23/7/2023',
            amout: '59.99'
          },
          {
            icon: 'bx bxl-youtube text-red-500 mr-2',
            origin: 'Twitch',
            date: '20/7/2023',
            amout: '49.99'
          }
        ]
    },
    {
        id: 1234,
        cardCreditName: 'Jorge Coca',
        bankname: 'BHD',
        cardTitle: 'La doña',
        income: 31.14,
        outcome: 0.00,
        cardDiseing: 'https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000',
        cardNumber: '4532 1341 3531 9314',
        cardCCV: 231,
        cardDate: '21/03',
        amout: 53414.14,
        showInfo: false,
        typeCard: 'Débito',
        selected: false,
        transitionDate: [
          {
            icon: 'bx bxl-netlify text-cyan-600 mr-2',
            origin: 'Netlify',
            date: '25/7/2023',
            amout: '9.99'
          },  
          {
            icon: 'bx bxl-aws text-orange-700 mr-2',
            origin: 'AWS',
            date: '25/7/2023',
            amout: '19.99'
          },
          {
            icon: 'bx bxl-meta text-blue-500 mr-2',
            origin: 'Facebook',
            date: '23/7/2023',
            amout: '59.99'
          },
          {
            icon: 'bx bxl-youtube text-red-500 mr-2',
            origin: 'Twitch',
            date: '20/7/2023',
            amout: '49.99'
          }
        ]
    },
]


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
export const { 
  updateCreditCard, 
  updateOtherCreditCards, 
  toggleShowDetail 
} = creditCardsSlice.actions;