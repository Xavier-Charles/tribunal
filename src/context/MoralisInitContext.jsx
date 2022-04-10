import React, { useState, createContext } from "react";
// import { useMoralis, useMoralisWeb3Api } from "react-moralis";

/**
 *
 * Gatsby Context API: https://medium.com/swlh/gatsbys-global-state-management-with-react-s-context-5f8064e93351
 *
 */

export const MoralisInitContext = createContext(null);
const appId = import.meta.env.VITE_ROP_TESTNET_APP_ID;
const serverUrl = import.meta.env.VITE_ROP_TESTNET_APP_SERVER_URL;

const MoralisInitProvider = ({ children }) => {
  Moralis.start({ serverUrl, appId });

  return (
    <MoralisInitContext.Provider value="">
      {children}
    </MoralisInitContext.Provider>
  );
};
export default MoralisInitProvider;
