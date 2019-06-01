import {ActionTree} from 'vuex';
import {RootState} from '../../types';
import {defaultBackendTransaction} from '../../../backend/transactions';
import {TransactionState} from './types';

export const actions: ActionTree<TransactionState, RootState> = {
  /**
   * Evaluate Transaction
   * Post with base64 image string
   */
  async evaluatePayment({commit, dispatch}, payload: any) {
    return defaultBackendTransaction.evaluatePayment(payload);
  },
  /**
   * Create Transaction
   */
  async createTransaction({commit, dispatch}, payload: any) {
    return defaultBackendTransaction.createTransaction(payload);
  },
  async getExpenses({commit, dispatch}) {
    return defaultBackendTransaction.getExpenses();
  },
  async getIncome({commit, dispatch}) {
    return defaultBackendTransaction.getIncome();
  },
  setTransaction({commit, dispatch}, payload: any) {
    try {
      commit('setTransaction', payload);
    } catch (e) {
      console.log(e);
    }
  },
  resetPayment({commit, dispatch}) {
    commit('resetPayment');
  },
  resetExpensesIncome({commit, dispatch}) {
    commit('resetExpensesIncome');
  },
};
