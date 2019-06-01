import Vue from 'vue';
import Vuex, {ActionTree, GetterTree, MutationTree, StoreOptions} from 'vuex';
import {transaction} from './modules/transaction';
import {category} from './modules/category';
import {RootState} from './types';

Vue.use(Vuex);

export const actions: ActionTree<State, RootState> = {};

export const mutations: MutationTree<State> = {};

export const getters: GetterTree<State, RootState> = {};

export interface State {
}

export const state = (): State => ({});

const storeOptions: StoreOptions<RootState> = {
  state: state() as any,
  getters,
  mutations,
  actions,
  modules: {
    transaction,
    category,
  },
};

const store = new Vuex.Store<RootState>(storeOptions);

export default store;
