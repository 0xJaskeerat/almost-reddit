import React from 'react';

const Comment = ({ content }) => {
  return (
    <div className="bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-700">
      <p className="text-gray-300">{content}</p>
    </div>
  );
};

export default Comment;
