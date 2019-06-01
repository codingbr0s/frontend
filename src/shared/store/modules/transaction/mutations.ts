import {MutationTree} from 'vuex';
import {TransactionState} from './types';
import {Payment} from '../../../model/payment';

export const mutations: MutationTree<TransactionState> = {
  setTransaction(state: TransactionState, payload: Payment) {
    state.payment = payload;
  },
  resetTransaction(state) {
    state.payment = {
      creditor: '',
      iban: '',
      desc: '',
      amount: 0,
      displayAmount: '0,00 €',
    };
  },
};
