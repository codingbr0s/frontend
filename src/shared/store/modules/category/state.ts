import {CategoryState} from './types';

export const state = (): CategoryState => (initialState());

export const initialState = (): CategoryState => ({
  category: null,
  subCategory: null,
  expenses: null,
  income: null,
  categories: [],
});
