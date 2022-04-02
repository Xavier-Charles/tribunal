import React from "react";
import { MoralisProvider } from "react-moralis";
import MoralisInitProvider from "../context/MoralisInitContext";

const MainContainer = ({ children }) => {
  return (
    <MoralisProvider
      appId={import.meta.env.VITE_TESTNET_APP_ID}
      serverUrl={import.meta.env.VITE_TESTNET_APP_SERVER_URL}
    >
      <MoralisInitProvider>{children}</MoralisInitProvider>
    </MoralisProvider>
  );
};

export default MainContainer;
