import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';
import CreatePost from '../components/CreatePost';
import { fetchPosts } from '../utils/api';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [posts, setPosts] = useState([]);

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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-4 bg-gray-900 text-white">
          <CreatePost addPost={addPost} />
          <PostList posts={posts} setPosts={setPosts} />
        </main>
      </div>
    </div>
  );
};

export default Home;
