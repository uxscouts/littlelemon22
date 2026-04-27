// src/context/UserContext.jsx
import { createContext, useState, useContext } from 'react';

// 1. Create the Context Object
const UserContext = createContext();

// 2. Custom hook for consuming the context easily
export const useUser = () => useContext(UserContext);

// 3. Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  // Function to update user values
  const updateUser = (name, email) => {
    setUser({ name, email });
  };

  return (
    // Pass both the state and the updater function
    <UserContext.Provider value={{ user, updateUser }}>
      <p>UserContext.jsx</p>
      {children}
    </UserContext.Provider>
  );
};
