import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RedditLogo from '../../public/redditlogo.svg';
import AlmostRedditLogo from '../../public/almost-reddit-text.svg'
import NotificationIcon from '../../public/notification.svg';
import ChatIcon from '../../public/chat.svg';
import UserAvatar from '../../public/Avatar.png';
import { useUser } from '../utils/UserContext';
import { Avatars } from 'appwrite';

const Header = ({ onCreatePostClick }) => {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleLogout = async () => {
    // TODO: Add logout

  }
  // Todo: Generate Avatar 

  return (
    <header className="sticky top-0 bg-gray-800 text-white px-4 py-4 flex justify-between items-center border-b-[1px] border-slate-500">
      <div className="flex items-center space-x-4">
        <img src={AlmostRedditLogo} alt="Reddit Logo" className="h-auto w-40" />
      </div>

      <div className="flex-grow flex justify-center">
        <input
          type="text"
          placeholder="Search Reddit"
          className="bg-gray-700 text-white px-6 py-3 text-sm rounded-3xl w-1/2 focus:outline-none"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button>
          <img src={ChatIcon} alt="Chat" className="w-5 mx-1 h-5" />
        </button>
        <button onClick={onCreatePostClick} className='flex gap-1 items-center'>
          <span className='text-3xl'>+</span>
          <span>Create</span>
        </button>
        <button>
          <img src={NotificationIcon} alt="Notifications" className="w-5 mx-1 h-5" />
        </button>
        <button className="bg-gray-700 p-2 rounded-full">
          {/* <img src={result.href || UserAvatar} alt="User Avatar" className="w-6 h-6 rounded-full" /> */}
        </button>
        <button onClick={handleLogout} className="bg-red-500 p-2 rounded">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
