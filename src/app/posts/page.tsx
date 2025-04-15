import { Suspense } from 'react';
import { ServerPostViewModel } from '@/viewModels/post/serverPostViewModel';
import PostClient from '@/components/post/PostClient';

export default async function PostsPage() {
  // ServerPostViewModel을 사용하여 데이터 가져오기
  const { posts, error } = await ServerPostViewModel.getPosts();
  
  // 에러 처리
  if (error) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">SSR 게시판 (axios 사용)</h1>
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          데이터를 불러오는 중 오류가 발생했습니다: {error.message}
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">SSR 게시판 (axios 사용)</h1>
      <Suspense fallback={<div>로딩 중...</div>}>
        {/* 서버에서 가져온 데이터를 클라이언트 컴포넌트에 전달 */}
        <PostClient initialPosts={posts} />
      </Suspense>
    </div>
  );
} 