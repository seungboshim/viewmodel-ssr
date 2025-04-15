import React from 'react';
import { Post } from '@/utils/apis/post/types/post.types';

interface PostListProps {
  posts: Post[] | undefined;
  isLoading: boolean;
  error: unknown;
}

export const PostList: React.FC<PostListProps> = ({ posts, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-lg text-red-500 mb-4">
        <p>게시글을 불러오는 중 오류가 발생했습니다.</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg text-center text-gray-500">
        <p>등록된 게시글이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold p-6 border-b">게시글 목록</h2>
      <ul className="divide-y divide-gray-200">
        {posts.map(post => (
          <li key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}; 