import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from './reducers'; 

//Invoice reducer aggiorna lo stato effettivo dello store
const store = configureStore({
  reducer: {
    invoice: invoiceReducer
  }
});

export default store;