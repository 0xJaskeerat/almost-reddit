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
    <form className="mt-2" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write a comment..."
        className="border p-2 w-full"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 rounded mt-2" type="submit">Comment</button>
    </form>
  );
};

export default CreateComment;
