import {AxiosPromise} from 'axios';
import {instance, URLS} from '.';

export interface BackendInvoice {
    createInvoice: (image: any) => AxiosPromise<any>;
}

export const defaultBackendInvoice: BackendInvoice = ({
    createInvoice(image: any): AxiosPromise<any> {
        return instance.post<any>('http://10.0.7.53:3000/api/upload', image);
    },
});
