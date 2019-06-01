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
  setTransaction({commit, dispatch}, payload: any) {
    try {
      commit('setTransaction', payload);
    } catch (e) {
      console.log(e);
    }
  },
  resetTransaction({commit, dispatch}) {
    commit('resetTransaction');
  },
};
