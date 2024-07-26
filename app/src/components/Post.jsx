import React, { useState } from 'react';
import { deletePost } from '../utils/api';
import CommentList from './CommentList';
import CreateComment from './CreateComment';

const Post = ({ id, title, content, imageURL, onDelete }) => {
  const [showComments, setShowComments] = useState(false);

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
      {imageURL && <img src={imageURL} alt={title} width={320} height={240} className="my-4 max-w-full h-auto rounded" />}
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
