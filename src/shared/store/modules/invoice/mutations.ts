import {MutationTree} from 'vuex';
import {InvoiceState} from './types';
import {initialState} from './state';
import {Invoice} from '../../../model/invoice';

export const mutations: MutationTree<InvoiceState> = {
  setInvoice(state: InvoiceState, payload: Invoice) {
    state.invoice = payload;
  },
  resetInvoice(state: InvoiceState) {
    state.invoice = null;
  },
};
