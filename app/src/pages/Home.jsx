import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';
import CreatePost from '../components/CreatePost';
import { fetchPosts } from '../utils/api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await fetchPosts();
        setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    };
    loadPosts();
  }, []);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <CreatePost addPost={addPost} />
        <PostList posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
};

export default Home;
