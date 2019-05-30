import {ActionTree} from 'vuex';
import {AuthState} from './types';
import {RootState} from '../../types';
import {defaultBackendAuthorization} from '@/shared/backend/authorization';

export const actions: ActionTree<AuthState, RootState> = {
  /**
   * Login
   */
  async login({commit, dispatch}, payload: any) {
    try {
      // authenticate to get the access token
      const response = await defaultBackendAuthorization.authenticate(payload.username!, payload.password!);
    } catch (e) {
    }
  },
};
