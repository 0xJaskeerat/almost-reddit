import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RedditLogo from '../../public/redditlogo.svg';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      //TODO: Add SignUp
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error(error);
      alert('Signup failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src={RedditLogo}
          alt="Reddit Logo"
          className='h-16 w-16 mb-4'
        />

        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <form className="w-full max-w-sm" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-700 border border-gray-600 p-2 mb-4 w-full rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-700 border border-gray-600 p-2 mb-4 w-full rounded"
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
          <h4 className='my-3 text-gray-400'>Already on Almost Reddit❓ <a href="/login" rel="noopener noreferrer" className='underline text-white'>Login</a></h4>

          <button className="bg-blue-600 text-white p-2 rounded w-full mb-4" type="submit">Signup</button>

        </form>
        <p className="text-xs text-gray-400 text-center w-80">
          By continuing, you agree to our <a href="/user-agreement" className="underline">User Agreement</a> and acknowledge that you understand the <a href="/privacy-policy" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
