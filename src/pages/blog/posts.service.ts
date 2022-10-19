import axiosClient from 'api/axiosClient';
import { from, Observable } from 'rxjs';
import { PaginationRequest } from '../../models/common';

class PostService {
  private static _instance: PostService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  get = (params: PaginationRequest): Observable<any> =>
    from(axiosClient.get('http://localhost:3001/posts'));
}

export const _PostService = PostService.Instance;
