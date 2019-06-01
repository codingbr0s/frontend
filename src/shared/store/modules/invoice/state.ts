import {InvoiceState} from './types';

export const state = (): InvoiceState => (initialState());

export const initialState = (): InvoiceState => ({
  invoice: {
    from: '',
    to: '',
    iban: '',
    usage: '',
    amount: 0,
  },
});
