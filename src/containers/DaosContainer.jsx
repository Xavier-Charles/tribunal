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
    console.log(isAuthenticated, user);
    let isSubscribed = true;
    if (isSubscribed && !user) {
      refetchUserData();
    }

    return () => {
      isSubscribed = false;
    };
  }, []);

  // useEffect(() => {
  //   let isSubscribed = true;

  //   console.log(user);

  //   if (isSubscribed && isAuthenticated) {
  //     (async () => {
  //       const options = { q: "", filter: "global", chain: "Eth" };

  //       const userEthNFTs = await Web3Api.account.getNFTs(options);
  //       console.log(userEthNFTs);
  //     })();
  //   }
  //   return () => {
  //     isSubscribed = false;
  //   };
  // }, [user]);

  return <></>;
};

export default DaosContainer;
