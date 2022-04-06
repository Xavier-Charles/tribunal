import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import "./home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DaosFromYourNFTs from "../components/DaosFromYourNFTs";
import AllDaos from "../components/AllDaos";
import Daos from "../api/testDaos.json";

/**
 *
 * doc: https://github.com/nft-api/nft-api#supported-blockchains
 */

const HomeContainer = () => {
  const { authenticate, isAuthenticated, logout, user } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  const [userNFTs, setuserNFTs] = useState([]);
  const [userDAOsMatch, setUserDAOsMatch] = useState([]);

  const handleAuthenticate = () => {
    logout();
    authenticate({ signingMessage: "Filter Daos by NFTs in your Wallet" });
  };

  const handleMatchUserToDAO = async () => {
    let match = [];
    if (user) {
      await Promise.all(
        Daos.map(async (dao) => {
          if (dao.contract_address !== "test") {
            const data = await Web3Api.account.getNFTsForContract({
              chain: "ropsten",
              address: user.attributes.ethAddress,
              token_address: dao.contract_address,
            });
            if (data) match.push(dao);
          }
        })
      );
    }
    return match;
  };

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed && isAuthenticated) {
      (async () => {
        // const options = { q: "", filter: "global", chain: "eth" }; // Mainnet
        const optionsRop = { q: "", filter: "global", chain: "ropsten" }; // Mainnet

        const res = await Web3Api.account.getNFTs(optionsRop);
        setuserNFTs(res.result);
      })();
    }
    return () => {
      isSubscribed = false;
    };
  }, [isAuthenticated]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed && userNFTs.length > 0) {
      (async () => {
        const data = await handleMatchUserToDAO();
        if (data.length > 0) setUserDAOsMatch(data);
      })();
    }

    return () => {
      isSubscribed = false;
    };
  }, [userNFTs]);

  return (
    <>
      <Navbar />
      <Hero handleAuthenticate={handleAuthenticate} />
      <DaosFromYourNFTs hasUser={!!user} userDAOsMatch={userDAOsMatch} />
      <AllDaos />
    </>
  );
};

export default HomeContainer;
