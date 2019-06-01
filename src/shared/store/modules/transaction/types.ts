import {Payment} from '../../../model/payment';

export interface TransactionState {
  payment: Payment | null;
  expenses: any | null;
  income: any | null;
}
