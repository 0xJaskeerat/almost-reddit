import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../utils/UserContext';
import RedditLogo from '../../public/redditlogo.svg';
import DiscordLogo from '../../public/discordlogo.svg';
import GithubLogo from '../../public/gitHublogo.svg';
import { OAuthProvider } from 'appwrite';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  // email and password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // TODO: Add login
      setTimeout(() => {
          // dummy user
          setUser({ email });
      }, 2000);

      navigate("/");
    } catch (error) {
      alert('Login failed');
    }
  };

  // login with github
  const handleLoginWithGithub = async () => {
   // TODO: Add login with Github
  }

  const handleLoginWithDiscord = () => {
   // TODO: Add login with Discord
  }

  const handleAnonymousLogin = () => {
    // TODO: Add anonymous login
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src={RedditLogo}
          alt="Reddit Logo"
          className='h-16 w-16 mb-4'
        />

        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-700 border border-gray-600 p-2 mb-2 w-full rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-700 border border-gray-600 p-2 mb-4 w-full rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h4 className='my-3 text-gray-400'>New to Almost Reddit❓ <a href="/signup" rel="noopener noreferrer" className='underline text-white'>Signup</a></h4>

          <button className="bg-blue-600 text-white p-2 rounded w-full mb-4" type="submit">Login</button>

        </form>

        <div className="flex items-center my-6 w-full max-w-sm">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-6">
          <button className="flex items-center px-2 py-1 bg-gray-700 rounded-full" onClick={handleLoginWithGithub}>
            <img src={GithubLogo} alt="Github" className="w-8 h-8 mr-2" />
            <span className="text-white">Continue with Github</span>
          </button>
          <button className="flex items-center px-2 py-1 bg-gray-700 rounded-full" onClick={handleLoginWithDiscord}>
            <img src={DiscordLogo} alt="Discord" className="w-8 h-8 mr-2" />
            <span className="text-white">Continue with Discord</span>
          </button>
          <button className="flex items-center justify-center w-full px-2 py-2 bg-gray-700 rounded-full" onClick={handleAnonymousLogin}>
            <span className="text-white">Continue Anonymously 🫣</span>
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center w-80">
          By continuing, you agree to our <a href="/user-agreement" className="underline">User Agreement</a> and acknowledge that you understand the <a href="/privacy-policy" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
