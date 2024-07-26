import React, { useState } from 'react';
import { createPost, uploadImage, getFilePreviewURL } from '../utils/api';

const CreatePost = ({ addPost, closeModal }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageURL = '';
      if (image) {
        console.log("image", image);
        const imageResponse = await uploadImage(image);
        console.log("imageResponse", imageResponse);
        imageURL = getFilePreviewURL(imageResponse.$id);
      }

      const post = await createPost(title, content, imageURL);
      addPost(post);
      setTitle('');
      setContent('');
      setImage(null);
      closeModal();
    } catch (error) {
      console.error(error);
      alert('Failed to create post');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-400">Create Post</h2>

      <form onSubmit={handleSubmit} className="">
        <label>Title</label>
        <input
          type="text"
          placeholder="Title"
          className="my-3 bg-transparent rounded-xl text-sm border border-gray-600 px-6 py-4 w-full text-white focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="my-4">Content</label>
        <textarea
          placeholder="Content"
          className="my-3 bg-transparent rounded-xl text-sm border border-gray-600 px-6 py-4 w-full h-32 text-white focus:outline-none focus:border-blue-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label>Image <span className='text-red-600'>(Optional)</span></label>
        <input
          type="file"
          className="my-3 bg-transparent rounded-xl text-sm border border-gray-600 px-6 py-4 w-full text-white focus:outline-none"
          onChange={handleImageChange}
          accept="image/*"
        />

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
