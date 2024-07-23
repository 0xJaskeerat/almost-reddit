import React from 'react';
import { account } from '../utils/appwrite';
import { useNavigate } from 'react-router-dom';

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
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">Reddit Clone</h1>
      <button onClick={handleLogout} className="bg-red-500 p-2 rounded">
        Logout
      </button>
    </header>
  );
};

export default Header;
