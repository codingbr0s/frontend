import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { TransactionState } from './types';
import { RootState } from '../../types';
import { state } from './state';

const namespaced: boolean = true;

export const transaction: Module<TransactionState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
