'use client';

import { Suspense } from 'react';
import { PostListView } from '@/components/organisms/PostListView';

export default function PostsCSRPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">CSR 게시판 (조회 전용)</h1>
      <Suspense fallback={<div>로딩 중...</div>}>
        <PostListView />
      </Suspense>
    </div>
  );
} 