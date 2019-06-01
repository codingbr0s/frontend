import {MutationTree} from 'vuex';
import {CategoryState} from './types';

export const mutations: MutationTree<CategoryState> = {
  setCategory(state: CategoryState, payload: any) {
    state.category = payload;
  },
  setSubCategory(state: CategoryState, payload: any) {
    state.subCategory = payload;
  },
  resetPayment(state) {
    state.category = null;
    state.subCategory = null;
  },
};
