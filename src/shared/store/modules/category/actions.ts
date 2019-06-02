import {ActionTree} from 'vuex';
import {RootState} from '../../types';
import {defaultBackendCategory} from '../../../backend/category';
import {CategoryState} from './types';

export const actions: ActionTree<CategoryState, RootState> = {
  async getCategory({commit, dispatch}, payload: any) {
    return defaultBackendCategory.getCategory(payload);
  },
  async getSubCategory({commit, dispatch}, payload: any) {
    return defaultBackendCategory.getSubCategory(payload);
  },
  getExpenses({commit, dispatch}) {
    return defaultBackendCategory.getExpenses();
  },
  getIncome({commit, dispatch}) {
    return defaultBackendCategory.getIncome();
  },
  getCategories({commit, dispatch}) {
    return defaultBackendCategory.getCategories();
  },
  setCategories({commit, dispatch}, payload: any) {
    commit('setCategories', payload);
  },
  resetCategories({commit, dispatch}) {
    commit('resetCategories');
  },
  resetExpensesIncome({commit, dispatch}) {
    commit('resetExpensesIncome');
  },
};
