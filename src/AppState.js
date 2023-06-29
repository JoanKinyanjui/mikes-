import { createContext, useState } from 'react';

export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppStateContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </AppStateContext.Provider>
  );
};