import React from 'react';
import { account } from '../utils/appwrite';
import { useNavigate } from 'react-router-dom';
import RedditLogo from '../../public/redditlogo.svg';
import NotificationIcon from '../../public/notification.svg';
import ChatIcon from '../../public/chat.svg';
import UserAvatar from '../../public/Avatar.png';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <header className="bg-gray-800 text-white px-16 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
          src={RedditLogo}
          alt="Reddit Logo"
          className='h-10 w-10'
        />
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
          <img src={NotificationIcon} alt="Notifications" className="w-5 mx-1 h-5" />
        </button>
        <button>
          <img src={ChatIcon} alt="Chat" className="w-5 mx-1 h-5" />
        </button>
        <button className="bg-gray-700 p-2 rounded-full">
          <img src={UserAvatar} alt="User Avatar" className="w-6 h-6 rounded-full" />
        </button>
        <button onClick={handleLogout} className="bg-red-500 p-2 rounded">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
