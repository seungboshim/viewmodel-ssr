import React from 'react';
import { Input } from '@/components/atoms/Input';
import { TextArea } from '@/components/atoms/TextArea';
import { Button } from '@/components/atoms/Button';
import { CreatePostRequest } from '@/utils/apis/post/types/post.types';

interface PostFormProps {
  formData: CreatePostRequest;
  isSubmitting: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const PostForm: React.FC<PostFormProps> = ({
  formData,
  isSubmitting,
  onChange,
  onSubmit
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">새 게시글 작성</h2>
      
      <form onSubmit={onSubmit}>
        <Input
          name="title"
          label="제목"
          placeholder="제목을 입력하세요"
          value={formData.title}
          onChange={onChange}
          required
        />
        
        <TextArea
          name="body"
          label="내용"
          placeholder="내용을 입력하세요"
          value={formData.body}
          onChange={onChange}
          rows={5}
          required
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="mt-2"
        >
          {isSubmitting ? '등록 중...' : '게시글 등록'}
        </Button>
      </form>
    </div>
  );
}; 