import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

const VITE_REACT_APP_APPWRITE_URL = import.meta.env.VITE_REACT_APP_APPWRITE_URL
const VITE_REACT_APP_APPWRITE_PROJECT_ID= import.meta.env.VITE_REACT_APP_APPWRITE_PROJECT_ID

client
  .setEndpoint(VITE_REACT_APP_APPWRITE_URL) // Your Appwrite Endpoint
  .setProject(VITE_REACT_APP_APPWRITE_PROJECT_ID); // Your project ID

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage };
