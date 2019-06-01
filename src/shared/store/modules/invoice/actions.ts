import {ActionTree} from 'vuex';
import {AuthState} from './types';
import {RootState} from '../../types';
import {defaultBackendAuthorization} from '@/shared/backend/authorization';
import {defaultBackendInvoice} from '@/shared/backend/invoices';

export const actions: ActionTree<AuthState, RootState> = {
  /**
   * Login
   */
  async createInvoice({commit, dispatch}, payload: any) {
    try {
      return defaultBackendInvoice.createInvoice(payload.image);
    } catch (e) {
      console.log(e);
    }
  },
};
