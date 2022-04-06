import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import "./home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DaosFromYourNFTs from "../components/DaosFromYourNFTs";
import AllDaos from "../components/AllDaos";

/**
 * 
 * doc: https://github.com/nft-api/nft-api#supported-blockchains
 */

const HomeContainer = () => {
  const { authenticate, isAuthenticated, logout, user } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  const [userNFTs, setuserNFTs] = useState([])

  const handleAuthenticate = () => {
    logout()
    authenticate({signingMessage: "Filter Daos by NFTs in your Wallet"});
  };

  useEffect(() => {
    let isSubscribed = true;

    console.log(user);

    if (isSubscribed && isAuthenticated) {
      (async () => {
        // const options = { q: "", filter: "global", chain: "eth" }; // Mainnet
        const optionsRop = { q: "", filter: "global", chain: "ropsten" }; // Mainnet

        const res = await Web3Api.account.getNFTs(optionsRop);
        console.log(res);
        setuserNFTs(res.result);
      })();
    }
    return () => {
      isSubscribed = false;
    };
  }, [isAuthenticated]);

  return (
    <>
      <Navbar />
      <Hero handleAuthenticate={handleAuthenticate} />
      <DaosFromYourNFTs userNFTs={userNFTs} hasUser={!!user} />
      <AllDaos />
    </>
  );
};

export default HomeContainer;
