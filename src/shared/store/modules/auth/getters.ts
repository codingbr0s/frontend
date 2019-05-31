import {GetterTree} from 'vuex';
import {AuthState} from './types';
import {RootState} from '../../types';

export const getters: GetterTree<AuthState, RootState> = {
  /**
   * Answers whether the user is authenticated (an access userToken is provided).
   */
  // return a function so it is no cached
  ['userToken']: (state: AuthState) => () => state.userToken,
  isLoggedIn(state): boolean {
    return !!state.userToken;
  },
};
