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

  const handleUpvote = async () => {
    try {
      const newUpvotes = votes.upvotes + 1;
      await updatePostVotes(id, newUpvotes, votes.downvotes);
      setVotes((prev) => ({ ...prev, upvotes: newUpvotes }));
    } catch (error) {
      console.error('Failed to upvote post:', error);
    }
  };

  const handleDownvote = async () => {
    try {
      const newDownvotes = votes.downvotes + 1;
      await updatePostVotes(id, votes.upvotes, newDownvotes);
      setVotes((prev) => ({ ...prev, downvotes: newDownvotes }));
    } catch (error) {
      console.error('Failed to downvote post:', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-4 my-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
      <div className="flex items-center">
        <button onClick={handleUpvote} className="bg-green-500 p-2 rounded mt-2 mr-2">Upvote</button>
        <span>{votes.upvotes}</span>
        <button onClick={handleDownvote} className="bg-red-500 p-2 rounded mt-2 ml-2">Downvote</button>
        <span>{votes.downvotes}</span>
      </div>
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
