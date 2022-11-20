import React, { useState, createContext } from "react";

export const MoralisInitContext = createContext(null);
const apiKey = import.meta.env.VITE_VITE_MORALIS_API_KEY;
const MoralisInitProvider = ({ children }) => {
  // Moralis.start({ apiKey });

  return (
    <MoralisInitContext.Provider value="">
      {children}
    </MoralisInitContext.Provider>
  );
};
export default MoralisInitProvider;
