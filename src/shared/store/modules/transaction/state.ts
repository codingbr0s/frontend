import {TransactionState} from './types';

export const state = (): TransactionState => (initialState());

export const initialState = (): TransactionState => ({
  transaction: {
    creditor: '',
    iban: '',
    desc: '',
    total: 0,
  },
});
