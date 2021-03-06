import {AxiosPromise} from 'axios';
import {instance} from '.';

export interface BackendTransaction {
  evaluatePayment: (image: any) => AxiosPromise<any>;
  createTransaction: (image: any) => AxiosPromise<any>;
  getTransaction: (id: any) => AxiosPromise<any>;
  getNewTransactions: () => AxiosPromise<any>;

}

export const defaultBackendTransaction: BackendTransaction = ({
  evaluatePayment(image: any): AxiosPromise<any> {
    return instance.post<any>('http://10.0.7.53:3000/api/upload', image);
  },
  createTransaction(transaction: any): AxiosPromise<any> {
    return instance.post<any>('http://10.0.7.53:3000/api/transactions', transaction);
  },
  getTransaction(id: any): AxiosPromise<any> {
    return instance.get<any>('http://10.0.7.53:3000/api/transactions/expenses', id);
  },
  getNewTransactions(): AxiosPromise<any> {
    return instance.get<any>('http://10.0.7.53:3000/api/transactions/new');
  },
});
