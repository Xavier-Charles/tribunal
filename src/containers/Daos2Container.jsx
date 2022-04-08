import React, { useContext, useEffect } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
// import NoNfts from "../components/NoNfts";
import { MoralisInitContext } from "../context/MoralisInitContext";

const DaosContainer = () => {
  const { Moralis, Web3Api } = useContext(MoralisInitContext);
  const { authenticate, isAuthenticated, logout, user, refetchUserData } =
    Moralis;
  const MoralisTest = useMoralis();
  // MoralisTest

  // user.get("ethAddress"); useful function

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed && !user) {
      refetchUserData();
    }

    return () => {
      isSubscribed = false;
    };
  }, []);

  return <></>;
};

export default DaosContainer;
