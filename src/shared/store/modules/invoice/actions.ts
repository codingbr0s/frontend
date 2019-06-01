import {ActionTree} from 'vuex';
import {AuthState} from './types';
import {RootState} from '../../types';
import {defaultBackendInvoice} from '../../../backend/invoices';

export const actions: ActionTree<AuthState, RootState> = {
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
};
