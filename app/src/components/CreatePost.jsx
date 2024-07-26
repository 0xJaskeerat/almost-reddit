import React, { useState } from 'react';
import { createPost } from '../utils/api';

const CreatePost = ({ addPost }) => {
  const [selectedPostType, setSelectedPostType] = useState('text');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
    setContent('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const post = await createPost(selectedPostType, title, content);
      addPost(post);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error(error);
      alert('Failed to create post');
    }
  };

  return (
    <div className="bg-gray-800 text-white px-24 py-12 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-400">Create Post</h2>
      
      <div className="flex justify-start mb-6 text-xs">
        <span
          onClick={() => handlePostTypeChange('text')}
          className={`cursor-pointer font-bold text-sm ${selectedPostType === 'text' ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent'} mr-3 px-2 pb-1`}
        >
          Text
        </span>
        <span
          onClick={() => handlePostTypeChange('media')}
          className={`cursor-pointer font-bold text-sm ${selectedPostType === 'media' ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent'} mx-3 px-2 pb-1`}
        >
          Images & Videos
        </span>
        <span
          onClick={() => handlePostTypeChange('link')}
          className={`cursor-pointer font-bold text-sm ${selectedPostType === 'link' ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent'} mx-3 px-2 pb-1`}
        >
          Link
        </span>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="bg-transparent mb-2 rounded-xl text-sm border border-gray-600 px-6 py-4 w-full text-white focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        {selectedPostType === 'text' && (
          <textarea
            placeholder="Content"
            className="bg-transparent rounded-xl text-sm border border-gray-600 px-6 py-4 w-full h-32 text-white focus:outline-none focus:border-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        )}
        
        {selectedPostType === 'media' && (
          <input
            type="file"
            className="bg-transparent rounded-xl text-sm border border-gray-600 px-6 py-4 w-full text-white focus:outline-none"
            multiple
          />
        )}
        
        {selectedPostType === 'link' && (
          <input
            type="url"
            placeholder="Paste your link here"
            className="bg-transparent rounded-xl text-sm border border-gray-600 px-6 py-4 w-full text-white focus:outline-none focus:border-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        )}
        
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-7 py-2 rounded-3xl hover:bg-blue-700 focus:outline-none mt-2"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
