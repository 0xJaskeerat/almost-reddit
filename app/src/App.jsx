import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { UserProvider, useUser } from './utils/UserContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useUser();
  return user ? <Element {...rest} /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute element={Home} />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
