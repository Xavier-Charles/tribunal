import React, { useState } from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DaosFromYourNFTs from "../components/DaosFromYourNFTs";
import AllDaos from "../components/AllDaos";
// import CheckNFTs from "../api/checkNFTs";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { TribunalsContext } from "../context/TribunalsContext";

/**
 *
 * doc: https://github.com/nft-api/nft-api#supported-blockchains
 *
 */

const HomeContainer = () => {
  const { handleAuthenticate, handleUDAuthenticate } = useContext(UserContext);
  const {tribunals} = useContext(TribunalsContext)
  const [userDAOsMatch, setUserDAOsMatch] = useState([]);
  

  return (
    <>
      <Navbar />
      <Hero
        handleAuthenticate={handleAuthenticate}
        handleUAuthenticate={handleUDAuthenticate}
      />
      <DaosFromYourNFTs userDAOsMatch={userDAOsMatch} />
      <AllDaos tribunals={tribunals} />
    </>
  );
};

export default HomeContainer;
