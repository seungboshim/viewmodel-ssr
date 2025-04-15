import { GetAxiosInstance } from '../axios.instance';
import { Post } from './types/post.types';

// 서버 컴포넌트에서 사용할 포스트 목록 조회 함수
export const getServerPosts = async (): Promise<Post[]> => {
  try {
    const response = await GetAxiosInstance.get<Post[]>('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts from server:', error);
    throw new Error('Failed to fetch posts');
  }
};

// 서버 컴포넌트에서 사용할 포스트 상세 조회 함수
export const getServerPost = async (postId: number): Promise<Post> => {
  try {
    const response = await GetAxiosInstance.get<Post>(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post ${postId} from server:`, error);
    throw new Error(`Failed to fetch post ${postId}`);
  }
}; 