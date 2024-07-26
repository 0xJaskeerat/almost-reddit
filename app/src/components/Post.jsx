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
    <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 my-4 border border-gray-700">
      <h2 className="text-xl font-semibold mb-2 text-gray-200">{title}</h2>
      <p className="text-gray-400 mb-4">{content}</p>
      <div className="flex flex-col mb-4">
        <span>

          {imageURL && <img src={imageURL} alt={title} width={320} height={240} className="my-4 max-w-full h-auto rounded" />}
        </span>
        <div className='flex items-center gap-2'>

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
          <button
            onClick={toggleComments}
            className="bg-gray-600 text-white px-3 py-1 rounded-lg hover:bg-gray-700 ml-2"
          >
            {showComments ? 'Hide Comments' : 'Show Comments'}
          </button>
        </div>
      </div>
      {showComments && (
        <>
          <CommentList postId={id} />
          <CreateComment postId={id} onAddComment={() => { }} />
        </>
      )}
    </div>
  );
};

export default Post;
