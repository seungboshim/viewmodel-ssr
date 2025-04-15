import { useState } from 'react';
import { useGetPostsQuery, useCreatePostMutation } from '@/store/queries/postQueries';
import { CreatePostRequest } from '@/utils/apis/post/types/post.types';

export const usePostViewModel = () => {
  const [formData, setFormData] = useState<CreatePostRequest>({
    title: '',
    body: '',
    userId: 1, // 임시 사용자 ID
  });
  
  // 포스트 데이터 조회
  const { 
    data: posts,
    isLoading: isLoadingPosts,
    error: postsError
  } = useGetPostsQuery();
  
  // 포스트 생성 뮤테이션
  const { 
    mutate: createPost, 
    isPending: isCreating, 
    error: createError 
  } = useCreatePostMutation();
  
  // 폼 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPost(formData);
    // 폼 초기화
    setFormData({ title: '', body: '', userId: 1 });
  };
  
  return {
    // 상태
    formData,
    posts,
    isLoadingPosts,
    isCreating,
    error: postsError || createError,
    
    // 핸들러
    handleChange,
    handleSubmit,
  };
}; 