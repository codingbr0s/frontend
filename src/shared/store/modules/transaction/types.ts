import {Payment} from '../../../model/payment';

export interface TransactionState {
  payment: Payment | null;
  transaction: any | null;
  expenses: any | null;
  income: any | null;
}
