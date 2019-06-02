import {MutationTree} from 'vuex';
import {TransactionState} from './types';
import {Payment} from '../../../model/payment';

export const mutations: MutationTree<TransactionState> = {
  setPayment(state: TransactionState, payload: Payment) {
    state.payment = payload;
  },
  setTransaction(state: TransactionState, payload: any) {
    state.transaction = payload;
  },

  resetPayment(state) {
    state.payment = {
      creditor: '',
      iban: '',
      desc: '',
      amount: 0,
      displayamount: '0,00 €',
    };
  },
};
