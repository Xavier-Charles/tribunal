import React, { useState, createContext } from "react"
import { useMoralis, useMoralisWeb3Api } from "react-moralis";


/**
 * 
 * Gatsby Context API: https://medium.com/swlh/gatsbys-global-state-management-with-react-s-context-5f8064e93351
 * 
 */


export const MoralisInitContext = createContext(null)

const MoralisInitProvider = ({ children }) => {
  const Moralis = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  return (
    <MoralisInitContext.Provider value={{Moralis, Web3Api}}>
      {children}
    </MoralisInitContext.Provider>
  );
}
export default MoralisInitProvider;
