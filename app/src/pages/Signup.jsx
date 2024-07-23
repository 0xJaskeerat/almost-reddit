import React, { useState } from 'react';
import { account } from '../utils/appwrite';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await account.create('unique()', email, password, name);
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Signup failed');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form className="bg-white shadow-md rounded p-4 my-4" onSubmit={handleSignup}>
        <h2 className="text-xl font-bold mb-2">Signup</h2>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 mb-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
