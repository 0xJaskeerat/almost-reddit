import { databases } from './appwrite';
import { DATABASE_ID, POSTS_COLLECTION_ID, COMMENTS_COLLECTION_ID } from './constants';

// Posts API
export const createPost = async (title, content) => {
  try {
    return await databases.createDocument(DATABASE_ID, POSTS_COLLECTION_ID, 'unique()', { title, content, upvotes: 0, downvotes: 0 });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchPosts = async () => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, POSTS_COLLECTION_ID);
    return response.documents;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    return await databases.deleteDocument(DATABASE_ID, POSTS_COLLECTION_ID, postId);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updatePostVotes = async (postId, upvotes, downvotes) => {
  try {
    return await databases.updateDocument(DATABASE_ID, POSTS_COLLECTION_ID, postId, { upvotes, downvotes });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Comments API
export const createComment = async (postId, content, userId) => {
  try {
    return await databases.createDocument(DATABASE_ID, COMMENTS_COLLECTION_ID, 'unique()', { postId, content, userId });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchComments = async (postId) => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COMMENTS_COLLECTION_ID, [`postId=${postId}`]);
    return response.documents;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
