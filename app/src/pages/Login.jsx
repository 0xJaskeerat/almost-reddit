import React, { useState } from 'react';
import { account } from '../utils/appwrite';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await account.createSession(email, password);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form className="bg-white shadow-md rounded p-4 my-4" onSubmit={handleLogin}>
        <h2 className="text-xl font-bold mb-2">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
