import React, { createContext, useContext, useState, useEffect } from 'react';
import { account } from '../utils/appwrite';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const accountData = await account.get();
        setUser(accountData);
      } catch(error) {
        setUser(null);
      }
    };

    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
