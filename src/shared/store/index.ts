import Vue from 'vue';
import Vuex, {ActionTree, GetterTree, MutationTree, StoreOptions} from 'vuex';
import {transaction} from './modules/transaction';
import {category} from './modules/category';
import {RootState} from './types';

Vue.use(Vuex);

export const actions: ActionTree<State, RootState> = {
  setShowProgress({commit, dispatch}, payload: any) {
    try {
      commit('setShowProgress', payload);
    } catch (e) {
      console.log(e);
    }
  },
};

export const mutations: MutationTree<State> = {
  setShowProgress(rootState: State, payload: any) {
    rootState.showProgress = payload;
  },
};

export const getters: GetterTree<State, RootState> = {};

export interface State {
  showProgress: boolean;
}

export const state = (): State => ({
  showProgress: false,
});

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
