import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPosts, createPost } from '@/utils/apis/post/post';
import { CreatePostRequest } from '@/utils/apis/post/types/post.types';

// 쿼리 키 상수
export const POST_QUERY_KEYS = {
  all: ['posts'] as const,
  list: () => [...POST_QUERY_KEYS.all, 'list'] as const,
};

// 포스트 목록 조회 쿼리
export const useGetPostsQuery = () => {
  return useQuery({
    queryKey: POST_QUERY_KEYS.list(),
    queryFn: getPosts,
  });
};

// 포스트 생성 뮤테이션
export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreatePostRequest) => createPost(data),
    onSuccess: () => {
      // 성공 시 포스트 목록 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: POST_QUERY_KEYS.list() });
    },
  });
}; 