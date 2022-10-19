import axiosClient from 'api/axiosClient';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { User, AuthRequest } from '../models/user';

const controller = 'user';
const getUserInfomation$ = new BehaviorSubject<User>({} as any);

export const login = (params: AuthRequest): Observable<any> =>
  from(axiosClient.post(`${controller}/login`, params));

