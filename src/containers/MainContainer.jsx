import React from "react";
// import { MoralisProvider } from "react-moralis";
// import MoralisInitProvider from "../context/MoralisInitContext";
const appId = import.meta.env.VITE_ROP_TESTNET_APP_ID;
const serverUrl = import.meta.env.VITE_ROP_TESTNET_APP_SERVER_URL;

const MainContainer = ({ children }) => {
  Moralis.start({ serverUrl, appId });
  return (
    // <MoralisProvider
    //   appId={import.meta.env.VITE_ROP_TESTNET_APP_ID}
    //   serverUrl={import.meta.env.VITE_ROP_TESTNET_APP_SERVER_URL}
    // >
    //   <MoralisInitProvider>{children}</MoralisInitProvider>
    // </MoralisProvider>
    <>{children}</>
  );
};

export default MainContainer;
