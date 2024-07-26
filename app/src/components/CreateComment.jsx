import React, { useState } from 'react';
import { createComment } from '../utils/api';
import { useUser } from '../utils/UserContext';

const CreateComment = ({ postId, onAddComment }) => {
  const [content, setContent] = useState('');
  const { user } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      const comment = await createComment(postId, content, user.$id);
      onAddComment(comment);
      setContent('');
    } catch (error) {
      console.error('Failed to create comment:', error);
    }
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write a comment..."
        className="bg-gray-700 border border-gray-600 p-2 w-full rounded-lg text-gray-200 focus:border-blue-500 focus:outline-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button 
        type="submit" 
        className="bg-blue-600 text-white p-2 rounded-lg mt-2 hover:bg-blue-700"
      >
        Comment
      </button>
    </form>
  );
};

export default CreateComment;
