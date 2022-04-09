import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import "./home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DaosFromYourNFTs from "../components/DaosFromYourNFTs";
import AllDaos from "../components/AllDaos";
import Daos from "../api/testDaos.json";
import CheckNFTs from "../api/checkNFTs";

/**
 *
 * doc: https://github.com/nft-api/nft-api#supported-blockchains
 */

const HomeContainer = () => {

  const [userDAOsMatch, setUserDAOsMatch] = useState([]);

  const handleAuthenticate = async () => {
    const data = await CheckNFTs();
    if (data.length > 0) setUserDAOsMatch(data);
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
