import {MutationTree} from 'vuex';
import {TransactionState} from './types';
import {Payment} from '../../../model/payment';

export const mutations: MutationTree<TransactionState> = {
  setTransaction(state: TransactionState, payload: Payment) {
    state.payment = payload;
  },
  setExpenses(state: TransactionState, payload: any) {
    state.expenses = payload;
  },
  setIncome(state: TransactionState, payload: any) {
    state.income = payload;
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
  resetExpensesIncome(state) {
    state.expenses = null;
    state.income = null;
  },
};
