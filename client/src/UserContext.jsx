import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {

  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => { //Here we are tyring to fetch a user details in the background if a user exists i.e. after login
    if (!user) {
      axios.get('/profile').then(({ data }) => {
        setUser(data);
        setReady(true);
      })
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  )
};