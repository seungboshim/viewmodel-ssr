'use client';

import { useState } from 'react';
import { useCreatePostMutation } from '@/store/queries/postQueries';
import type { Post, CreatePostRequest } from '@/utils/apis/post/types/post.types';

interface UseSSRPostViewModelProps {
  initialPosts: Post[];
}

// SSR에서 가져온 초기 데이터를 사용하는 클라이언트 측 ViewModel 훅
export const useSSRPostViewModel = ({ initialPosts }: UseSSRPostViewModelProps) => {
  // 서버에서 가져온 초기 데이터로 상태 초기화
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  
  // 폼 데이터 상태
  const [formData, setFormData] = useState<CreatePostRequest>({
    title: '',
    body: '',
    userId: 1,
  });
  
  // 포스트 생성 뮤테이션
  const { 
    mutate: createPost, 
    isPending: isCreating, 
    error
  } = useCreatePostMutation();
  
  // 폼 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPost(formData, {
      onSuccess: (newPost) => {
        // 새 포스트를 추가하여 로컬 상태 업데이트
        setPosts(prev => [newPost, ...prev]);
        // 폼 초기화
        setFormData({ title: '', body: '', userId: 1 });
      }
    });
  };

  return {
    // 상태
    posts,
    formData,
    isCreating,
    error,
    
    // 핸들러
    handleChange,
    handleSubmit,
  };
}; 