import React from 'react';
import Post from './Post';

const PostList = ({ posts, setPosts }) => {

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.$id !== id));
  };

  return (
    <div className="space-y-4 ml-[256px] mr-[288px]">
      {posts.map((post) => (
        <Post 
          key={post.$id} 
          id={post.$id} 
          title={post.title} 
          content={post.content} 
          imageURL={post.imageURL} // Pass the imageURL prop
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
};

export default PostList;
