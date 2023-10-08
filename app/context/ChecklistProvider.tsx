import React, { ReactNode, createContext, useContext, useState } from 'react';

// Create a context
const ChecklistContext = createContext({
    checklists: [],
    refreshTrigger: false,
    refreshChecklists: () => {},
  });
  
// Create a provider component
export const ChecklistProvider = ({ children }: { children: ReactNode }) => {
    const [checklists, setChecklists] = useState([]);
    const [refreshTrigger, setRefreshTrigger] = useState(false);

  // Define a function to refresh checklists
  const refreshChecklists = () => {
    setRefreshTrigger(true);
  };

  // Provide the state and refresh function to the children
  const contextValue = {
    checklists,
    refreshTrigger,
    refreshChecklists,
  };

  return (
    <ChecklistContext.Provider value={contextValue}>
      {children}
    </ChecklistContext.Provider>
  );
};

// Create a custom hook to access the context
export const useChecklistContext = () => {
  return useContext(ChecklistContext);
};
