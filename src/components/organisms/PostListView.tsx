'use client';

import { useGetPostsQuery } from '@/store/queries/postQueries';
import { PostList } from '@/components/organisms/PostList';

// CSR 조회 전용 게시판 컴포넌트
export function PostListView() {
  // 포스트 데이터 조회 (클라이언트 사이드에서 CSR 방식으로 데이터 가져오기)
  const { 
    data: posts = [],
    isLoading, 
    error 
  } = useGetPostsQuery();

  return (
    <div>
      <div className="mb-6 p-4 bg-gray-100 rounded-md text-center">
        <p className="text-gray-600">이 게시판은 CSR 방식으로 데이터를 가져옵니다.</p>
        <p className="text-gray-600">조회 전용이며 클라이언트 측에서 API 호출이 이루어집니다.</p>
      </div>
      
      <PostList
        posts={posts}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
} 