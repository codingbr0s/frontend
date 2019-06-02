import {AxiosPromise} from 'axios';
import {instance} from '.';

export interface BackendCategory {
  getCategory: (input: any) => AxiosPromise<any>;
  getSubCategory: (input: any) => AxiosPromise<any>;
  getExpenses: () => AxiosPromise<any>;
  getIncome: () => AxiosPromise<any>;
  getCategories: () => AxiosPromise<any>;
}

export const defaultBackendCategory: BackendCategory = ({
  getCategory(id: any): AxiosPromise<any> {
    return instance.get<any>('http://10.0.7.53:3000/api/categories/' + `${id}`, id);
  },
  getSubCategory(id: any): AxiosPromise<any> {
    return instance.get<any>('http://10.0.7.53:3000/api/categories/sub/' + `${id}`, id);
  },
  getExpenses(): AxiosPromise<any> {
    return instance.get<any>('http://10.0.7.53:3000/api/categories/expenses');
  },
  getIncome(): AxiosPromise<any> {
    return instance.get<any>('http://10.0.7.53:3000/api/categories/income');
  },
  getCategories(): AxiosPromise<any> {
    return instance.get<any>('http://10.0.7.53:3000/api/categories');
  },
});
