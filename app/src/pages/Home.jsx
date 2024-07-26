import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';
import CreatePost from '../components/CreatePost';
import { fetchPosts } from '../utils/api';
import Sidebar from '../components/Sidebar';
import RightBar from '../components/RightBar';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await fetchPosts();
        setPosts(posts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };
    loadPosts();
  }, []);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onCreatePostClick={openModal} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-4 bg-gray-900 text-white">
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50"
              onClick={closeModal}
            >
              <div
                className="bg-gray-800 text-white px-24 py-12 rounded-lg shadow-lg relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
              >
                <CreatePost addPost={addPost} closeModal={closeModal} />
                <button
                  onClick={closeModal}
                  className="absolute text-[30px] top-4 right-6 text-gray-400 hover:text-white"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
          <PostList posts={posts} setPosts={setPosts} />
        </main>
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
