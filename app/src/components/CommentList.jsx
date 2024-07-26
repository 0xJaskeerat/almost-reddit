import React, { useEffect, useState } from 'react';
import { fetchComments } from '../utils/api';
import Comment from './Comment';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const comments = await fetchComments(postId);
        setComments(comments);
      } catch (error) {
        console.error('Failed to load comments:', error);
      }
    };
    loadComments();
  }, [postId]);

  return (
    <div className="mt-4 space-y-2">
      {comments.map((comment) => (
        <Comment key={comment.$id} content={comment.content} />
      ))}
    </div>
  );
};

export default CommentList;
