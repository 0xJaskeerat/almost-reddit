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
      alert(`${error}`);
    }
  };

  const toggleComments = () => setShowComments(!showComments);

  return (
    <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 my-4 border border-gray-700">
      <div className='flex items-center justify-between'>
        <div className="text-2xl font-semibold mb-2 text-gray-200 underline">{title}</div>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
        >
          Delete
        </button>
      </div>
      <div className="flex flex-col mb-4">
        <div className='flex justify-center mt-2'>
          {imageURL && <img src={imageURL} alt={title} width={320} height={240} className=" mb-6 max-w-full h-full rounded-2xl" />}
        </div>
        <div>Content:</div>
        <p className="text-gray-400 mb-4 text-sm mt-2 ml-3">{content}</p>
        <div className='flex items-center gap-2'>
          <button
            onClick={toggleComments}
            className="underline text-white py-1 rounded-lg"
          >
            {showComments ? 'Hide Comments' : 'Show Comments'}
          </button>
        </div>
      </div>
      {showComments && (
        <>
          <CommentList postId={id} />
        </>
      )}
      <CreateComment postId={id} onAddComment={() => { }} />
    </div>
  );
};

export default Post;
