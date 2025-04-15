import { getServerPosts, getServerPost } from '@/utils/apis/post/serverPost';
import type { Post } from '@/utils/apis/post/types/post.types';

// 서버 컴포넌트용 포스트 ViewModel
export class ServerPostViewModel {
  // 포스트 목록 조회
  static async getPosts(): Promise<{
    posts: Post[];
    error: Error | null;
  }> {
    try {
      const posts = await getServerPosts();
      return { posts, error: null };
    } catch (error) {
      console.error('Error in ServerPostViewModel.getPosts:', error);
      return { posts: [], error: error instanceof Error ? error : new Error('Unknown error') };
    }
  }

  // 포스트 상세 조회
  static async getPost(postId: number): Promise<{
    post: Post | null;
    error: Error | null;
  }> {
    try {
      const post = await getServerPost(postId);
      return { post, error: null };
    } catch (error) {
      console.error(`Error in ServerPostViewModel.getPost(${postId}):`, error);
      return { post: null, error: error instanceof Error ? error : new Error('Unknown error') };
    }
  }
} 