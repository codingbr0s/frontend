import {MutationTree} from 'vuex';
import {InvoiceState} from './types';
import {Invoice} from '../../../model/invoice';

export const mutations: MutationTree<InvoiceState> = {
  setInvoice(state: InvoiceState, payload: Invoice) {
    state.invoice = payload;
  },
  resetInvoice(state) {
    state.invoice = {
        creditor: '',
        iban: '',
        desc: '',
        total: 0,
    };
  },
};
