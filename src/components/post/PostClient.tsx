'use client';

import { PostList } from '@/components/post/PostList';
import type { Post } from '@/utils/apis/post/types/post.types';

interface PostClientProps {
  initialPosts: Post[];
}

// SSR 조회 전용 컴포넌트
export default function PostClient({ initialPosts }: PostClientProps) {
  return (
    <div>
      <div className="mb-6 p-4 bg-gray-100 rounded-md text-center">
        <p className="text-gray-600">이 게시판은 SSR 방식으로 데이터를 가져옵니다.</p>
        <p className="text-gray-600">조회 전용이며 서버 측에서 API 호출이 이루어집니다.</p>
      </div>
      
      <PostList
        posts={initialPosts}
        isLoading={false} // 이미 서버에서 데이터를 가져왔기 때문에 로딩 상태는 false
        error={null}
      />
    </div>
  );
} 