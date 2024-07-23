import React from 'react';

const Comment = ({ content }) => {
  return (
    <div className="bg-gray-100 p-2 rounded my-2">
      <p>{content}</p>
    </div>
  );
};

export default Comment;
