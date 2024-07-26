import { databases, storage } from './appwrite';
import { DATABASE_ID, POSTS_COLLECTION_ID, BUCKET_ID } from './constants';

// Posts API
export const createPost = async (title, content, imageURL) => {
  try {
    return await databases.createDocument(DATABASE_ID, POSTS_COLLECTION_ID, 'unique()', { title, content, imageURL });
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

export const uploadImage = async (file) => {
  try {
    const response = await storage.createFile(BUCKET_ID, 'unique()', file);
    return response;
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
    console.log("post id", postId);
    const response = await databases.listDocuments(DATABASE_ID, COMMENTS_COLLECTION_ID, [Query.contains('postId', [`${postId}`])]);
    return response.documents;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getFilePreviewURL = (fileId) => {
  return storage.getFilePreview(BUCKET_ID, fileId).href;
};
