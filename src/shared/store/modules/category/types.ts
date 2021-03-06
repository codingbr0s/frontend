import {Payment} from '../../../model/payment';

export interface CategoryState {
  category: any | null;
  subCategory: any | null;
  expenses: any | null;
  income: any | null;
  categories: any[] | null;
  expensesSum: string | null;
}
