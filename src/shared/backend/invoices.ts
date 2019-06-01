import {AxiosPromise} from 'axios';
import {instance, URLS} from '.';

export interface BackendInvoice {
    createInvoice: (image: WindowBase64) => AxiosPromise<any>;
}

export const defaultBackendInvoice: BackendInvoice = ({
    createInvoice(image: WindowBase64): AxiosPromise<any> {
        return instance.post<any>(`${URLS.invoice}`, image);
    },
});
