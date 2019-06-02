import {Payment} from '../../../model/payment';

export interface TransactionState {
  payment: Payment | null;
  transaction: any | null;
  newTransactions: any | null;
}
