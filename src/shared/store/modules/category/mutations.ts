import {MutationTree} from 'vuex';
import {CategoryState} from './types';
import {TransactionState} from '../transaction/types';

export const mutations: MutationTree<CategoryState> = {
  setCategory(state: CategoryState, payload: any) {
    state.category = payload;
  },
  setSubCategory(state: CategoryState, payload: any) {
    state.subCategory = payload;
  },
  setExpenses(state: CategoryState, payload: any) {
    state.expenses = payload;
  },
  setIncome(state: CategoryState, payload: any) {
    state.income = payload;
  },
  setCategories(state: CategoryState, payload: any) {
    state.categories = payload;
  },
  resetExpensesIncome(state) {
    state.expenses = null;
    state.income = null;
  },
  resetPayment(state) {
    state.category = null;
    state.subCategory = null;
  },
};
