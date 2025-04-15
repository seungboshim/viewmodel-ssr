import { GetAxiosInstance } from '../axios.instance';
import { Post, CreatePostRequest } from './types/post.types';

// 포스트 목록 조회
export const getPosts = async (): Promise<Post[]> => {
  const response = await GetAxiosInstance.get<Post[]>('/posts');
  return response.data;
};

// 포스트 조회
export const getPost = async (postId: number): Promise<Post> => {
  const response = await GetAxiosInstance.get<Post>(`/posts/${postId}`);
  return response.data;
};

// 포스트 생성
export const createPost = async (postData: CreatePostRequest): Promise<Post> => {
  const response = await GetAxiosInstance.post<Post>('/posts', postData);
  return response.data;
}; 