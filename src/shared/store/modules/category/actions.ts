import {ActionTree} from 'vuex';
import {RootState} from '../../types';
import {defaultBackendCategory} from '../../../backend/category';
import {CategoryState} from './types';

export const actions: ActionTree<CategoryState, RootState> = {
  getCategory({commit, dispatch}, payload: any) {
    return defaultBackendCategory.getCategory(payload);
  },
  getSubCategory({commit, dispatch}, payload: any) {
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
  setSubCategory({commit, dispatch}, payload: any) {
    commit('setSubCategory', payload);
  },
  getExpensesSum({commit, dispatch}) {
    return defaultBackendCategory.getExpensesSum();
  },
  setExpensesSum({commit, dispatch}, payload: any) {
    commit('setExpensesSum', payload);
  },
  resetCategories({commit, dispatch}) {
    commit('resetCategories');
  },
  resetExpensesIncome({commit, dispatch}) {
    commit('resetExpensesIncome');
  },
};
