import {InvoiceState} from './types';

export const state = (): InvoiceState => (initialState());

export const initialState = (): InvoiceState => ({
  invoice: {
    creditor: '',
    iban: '',
    desc: '',
    total: 0,
  },
});
