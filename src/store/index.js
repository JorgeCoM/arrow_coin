import { configureStore } from '@reduxjs/toolkit'
import  creditCardsSlice  from './creditCards/slice'


export const store = configureStore({
    reducer: {
        creditCards: creditCardsSlice
    }
})