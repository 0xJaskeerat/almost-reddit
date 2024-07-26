import React from 'react';
import { Link } from 'react-router-dom';
import RedditLogo from '../../public/redditlogo.svg'; // Replace with your logo
import HomeIcon from '../../public/home.svg'; // Replace with your icons
import PopularIcon from '../../public/popular.svg';
import AllIcon from '../../public/all.svg';
import CommunityIcon from '../../public/community.png';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col">
      {/* <div className="flex items-center mb-6">
        <img src={RedditLogo} alt="Reddit Logo" className="h-12 w-12" />
        <h1 className="text-2xl font-bold ml-2">Reddit Clone</h1>
      </div> */}

      <nav className="flex flex-col space-y-2">
        <Link to="/" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
          <img src={HomeIcon} alt="Home" className="w-4 h-4 mr-4" />
          <span className="text-lg">Home</span>
        </Link>

        <Link to="/popular" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
          <img src={PopularIcon} alt="Popular" className="w-4 h-4 mr-4" />
          <span className="text-lg">Popular</span>
        </Link>

        <Link to="/all" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
          <img src={AllIcon} alt="All" className="w-4 h-4 mr-4" />
          <span className="text-lg">All</span>
        </Link>

        <Link to="/community" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
          <img src={CommunityIcon} alt="Community" className="w-4 h-4 mr-4" />
          <span className="text-lg">Community</span>
        </Link>
      </nav>

      <div className="mt-auto">
        <p className="text-xs text-gray-400">© 2024 Reddit Clone</p>
      </div>
    </div>
  );
};

export default Sidebar;