import React, { useState } from 'react';
import { deletePost, updatePostVotes } from '../utils/api';
import CommentList from './CommentList';
import CreateComment from './CreateComment';

const Post = ({ id, title, content, upvotes, downvotes, onDelete }) => {
  const [showComments, setShowComments] = useState(false);
  const [votes, setVotes] = useState({ upvotes, downvotes });

  const handleDelete = async () => {
    try {
      await deletePost(id);
      onDelete(id);
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  const toggleComments = () => setShowComments(!showComments);

  return (
    <div className="bg-white shadow-md rounded p-4 my-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
      <button onClick={handleDelete} className="bg-red-500 p-2 rounded mt-2">Delete</button>
      <button onClick={toggleComments} className="bg-gray-500 p-2 rounded mt-2 ml-2">
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && (
        <>
          <CommentList postId={id} />
          <CreateComment postId={id} onAddComment={(comment) => {}} />
        </>
      )}
    </div>
  );
};

export default Post;
