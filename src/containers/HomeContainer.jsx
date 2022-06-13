import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import "./home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DaosFromYourNFTs from "../components/DaosFromYourNFTs";
import AllDaos from "../components/AllDaos";
import Daos from "../api/testDaos.json";
import CheckNFTs from "../api/checkNFTs";
import { uauth } from "../api/unstoppableAuth";

/**
 *
 * doc: https://github.com/nft-api/nft-api#supported-blockchains
 */

const HomeContainer = () => {
  const [userDAOsMatch, setUserDAOsMatch] = useState([]);

  const handleAuthenticate = async () => {
    try {
      const data = await CheckNFTs();
      if (data?.length > 0) {
        const matchedDao = Daos.filter(
          (dao) =>
            String(dao.contract_address).toLowerCase() ===
            String(data[0].token_address).toLowerCase()
        );

        if (matchedDao) {
          setUserDAOsMatch(matchedDao);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUAuthenticate = async () => {
    try {
      const UDuser = await Moralis.authenticate(uauth);

      console.log(UDuser);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        handleAuthenticate={handleAuthenticate}
        handleUAuthenticate={handleUAuthenticate}
      />
      <DaosFromYourNFTs userDAOsMatch={userDAOsMatch} />
      <AllDaos />
    </>
  );
};

export default HomeContainer;
