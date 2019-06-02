import {ActionTree} from 'vuex';
import {RootState} from '../../types';
import {defaultBackendTransaction} from '../../../backend/transactions';
import {TransactionState} from './types';

export const actions: ActionTree<TransactionState, RootState> = {
  /**
   * Evaluate Transaction
   * Post with base64 image string
   */
  evaluatePayment({commit, dispatch}, payload: any) {
    return defaultBackendTransaction.evaluatePayment(payload);
  },
  /**
   * Create Transaction
   */
  createTransaction({commit, dispatch}, payload: any) {
    return defaultBackendTransaction.createTransaction(payload);
  },
  getTransaction({commit, dispatch}, payload: any) {
    return defaultBackendTransaction.getTransaction(payload);
  },
  getNewTransaction({commit, dispatch}) {
    return defaultBackendTransaction.getNewTransactions();
  },
  setTransaction({commit, dispatch}, payload: any) {
    try {
      commit('setTransaction', payload);
    } catch (e) {
      console.log(e);
    }
  },
  setNewTransactions({commit, dispatch}, payload: any) {
    try {
      commit('setNewTransactions', payload);
    } catch (e) {
      console.log(e);
    }
  },
  setPayment({commit, dispatch}, payload: any) {
    try {
      commit('setPayment', payload);
    } catch (e) {
      console.log(e);
    }
  },
  resetPayment({commit, dispatch}) {
    commit('resetPayment');
  },
};
