import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { UserProvider, useUser } from './utils/UserContext';

const PrivateRoutes = () => {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to='/login' />;
}

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
