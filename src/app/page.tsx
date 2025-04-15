'use client';

import { usePostViewModel } from '@/viewModels/post/usePostViewModel';
import { PostForm } from '@/components/molecules/PostForm';
import { PostList } from '@/components/post/PostList';
import Link from 'next/link';

export default function Home() {
  const {
    formData,
    posts,
    isLoadingPosts,
    isCreating,
    error,
    handleChange,
    handleSubmit,
  } = usePostViewModel();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">JSONPlaceholder 게시판</h1>
      
      <div className="mb-6 flex justify-center space-x-6">
        <Link href="/posts" className="text-blue-500 hover:underline">
          SSR 게시판 (조회 전용)
        </Link>
        <Link href="/posts-csr" className="text-blue-500 hover:underline">
          CSR 게시판 (조회 전용)
        </Link>
      </div>
      
      <div className="mb-6 p-4 bg-yellow-50 rounded-md text-center">
        <p className="text-gray-700">이 페이지는 CSR 방식으로 데이터를 가져오며, 작성 및 조회 기능을 제공합니다.</p>
      </div>
      
      {/* 입력 폼 컴포넌트 */}
      <PostForm
        formData={formData}
        isSubmitting={isCreating}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      
      {/* 데이터 출력 컴포넌트 */}
      <PostList
        posts={posts}
        isLoading={isLoadingPosts}
        error={error}
      />
    </div>
  );
}
