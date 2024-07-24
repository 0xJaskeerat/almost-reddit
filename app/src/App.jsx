import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { UserProvider, useUser } from './utils/UserContext';


const PrivateRoute = ({ element: Element, ...rest }) => {
  return <Element {...rest} />
};

const App = () => {
  const { user } = useUser();
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        {
          user
            ? <Route path="/" element={<PrivateRoute element={Home} />} />
            : <Route path="/login" element={<Login />} />
        }
      </Routes>
    </Router>
  );
};

export default App;
