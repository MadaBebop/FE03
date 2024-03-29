import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invoice: {
    company: '',
    client: '',
    number: '',
    date: '',
    items: []
  }
};

//Reducer // con slice
/*
  A function:(initial state, an object of reducer functions, a "slice name")
  generates-> action creators and action types that correspond to the reducers and state.
*/
const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    updateInvoice(state, action) {
      // state.invoice = action.payload; //Aggiornamento "state" dentro lo store
        state.invoice.company= action.payload.company,
        state.invoice.client= action.payload.client,
        state.invoice.number= action.payload.number,
        state.invoice.date= action.payload.date,
        state.invoice.items= action.payload.items
      }
    },
});

export const { updateInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
