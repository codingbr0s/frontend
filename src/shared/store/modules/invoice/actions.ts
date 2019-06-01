import {ActionTree} from 'vuex';
import {RootState} from '../../types';
import {defaultBackendInvoice} from '../../../backend/invoices';
import {InvoiceState} from './types';

export const actions: ActionTree<InvoiceState, RootState> = {
  /**
   * Create Invoice
   * Post with base64 image string
   */
  async createInvoice({commit, dispatch}, payload: any) {
    try {
      const result: any = (await defaultBackendInvoice.createInvoice(payload)).data;
    } catch (e) {
      console.log(e);
    }
  },
  setInvoice({commit, dispatch}, payload: any) {
    try {
      commit('setInvoice', payload);
    } catch (e) {
      console.log(e);
    }
  },
};
