import {Transaction} from '../../../model/transaction';

export interface TransactionState {
  transaction: Transaction | null;
}
