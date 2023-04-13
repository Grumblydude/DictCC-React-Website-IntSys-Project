// Create a context object
import { createContext, useState } from 'react';

export const MyContext = createContext();

// Create a component that provides the context
export const MyProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <MyContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </MyContext.Provider>
  );
};