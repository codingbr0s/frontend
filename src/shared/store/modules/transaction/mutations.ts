import {MutationTree} from 'vuex';
import {TransactionState} from './types';
import {Transaction} from '../../../model/transaction';

export const mutations: MutationTree<TransactionState> = {
  setTransaction(state: TransactionState, payload: Transaction) {
    state.transaction = payload;
  },
  resetTransaction(state) {
    state.transaction = {
        creditor: '',
        iban: '',
        desc: '',
        total: 0,
    };
  },
};
