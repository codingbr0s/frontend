import {TransactionState} from './types';

export const state = (): TransactionState => (initialState());

export const initialState = (): TransactionState => ({
  payment: {
    creditor: '',
    iban: '',
    desc: '',
    amount: 0,
    displayamount: '0,00 €',
  },
  expenses: null,
  income: null,
});
