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
    return defaultBackendInvoice.createInvoice(payload);
  },
  setInvoice({commit, dispatch}, payload: any) {
    try {
      commit('setInvoice', payload);
    } catch (e) {
      console.log(e);
    }
  },
  resetInvoice({commit, dispatch}) {
    commit('resetInvoice');
  },
};
