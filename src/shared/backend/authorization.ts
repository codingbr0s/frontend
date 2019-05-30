import {AxiosPromise} from 'axios';
import {instance, URLS} from '.';
import {Credentials} from '@/shared/model/credentials';

export interface BackendAuthorization {
  authenticate: (username: string, password: string) => AxiosPromise<any>;
}

export const defaultBackendAuthorization: BackendAuthorization = ({
  authenticate(username: string, password: string): AxiosPromise<any> {
    const credentials: Credentials = {
      password,
      username,
    };
    return instance.post<any>(`${URLS.authenticate}`, credentials);
  },
});
