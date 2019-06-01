import {AxiosPromise} from 'axios';
import {instance, URLS} from '.';

export interface BackendTransaction {
    evaluateTransaction: (image: any) => AxiosPromise<any>;
    createTransaction: (image: any) => AxiosPromise<any>;
}

export const defaultBackendTransaction: BackendTransaction = ({
    evaluateTransaction(image: any): AxiosPromise<any> {
        return instance.post<any>('http://10.0.7.53:3000/api/upload', image);
    },
    createTransaction(transaction: any): AxiosPromise<any> {
        return instance.post<any>('http://10.0.7.53:3000/api/transaction', transaction);
    },
});
