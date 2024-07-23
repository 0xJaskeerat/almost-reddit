import React, { useState } from 'react';
import { createPost } from '../utils/api';

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const post = await createPost(title, content);
      addPost(post);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error(error);
      alert('Failed to create post');
    }
  };

  return (
    <form className="bg-white shadow-md rounded p-4 my-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-2">Create Post</h2>
      <input
        type="text"
        placeholder="Title"
        className="border p-2 mb-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="border p-2 mb-2 w-full"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">Post</button>
    </form>
  );
};

export default CreatePost;
