import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import "./home.css";
import Navbar from "../components/Navbar";
import Daos from "../components/daos";
import Hero from "../components/Hero";
import DaosFromYourNFTs from "../components/DaosFromYourNFTs";
import AllDaos from "../components/AllDaos";

const HomeContainer = () => {
  const { authenticate, isAuthenticated, logout, user } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  const [userNFTs, setuserNFTs] = useState([])

  const handleAuthenticate = () => {
    authenticate({signingMessage: "Filter Daos by NFTs in your Wallet"});
  };

  useEffect(() => {
    let isSubscribed = true;

    console.log(user);

    if (isSubscribed && isAuthenticated) {
      (async () => {
        const options = { q: "", filter: "global", chain: "Eth" };

        const res = await Web3Api.account.getNFTs(options);
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
