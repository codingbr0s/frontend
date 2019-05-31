import {MutationTree} from 'vuex';
import {AuthState} from './types';
import axios from 'axios';

export const mutations: MutationTree<AuthState> = {
  /**
   * Set the authentication token.
   */
  ['userToken']: (state: AuthState, userToken: string) => {
    state.userToken = userToken;
    if (userToken) {
      localStorage.setItem('accessToken', userToken);
      axios.defaults.headers.common.Authorization = userToken;
    } else {
      localStorage.removeItem('accessToken');
      delete axios.defaults.headers.common.Authorization;
    }
  },
};
