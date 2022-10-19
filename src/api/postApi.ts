import { Post } from 'pages/blog/models/Post.model';
import { PaginationRequest } from '../models/common';
import axiosClient from './axiosClient';

const postApi = {
  getAll(params: PaginationRequest): Promise<Post[]> {
    const url = `/posts`;
    return axiosClient.get(url);
  },
};
export default postApi;
