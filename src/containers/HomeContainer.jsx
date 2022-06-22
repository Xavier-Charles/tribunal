import React, { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DaosFromYourNFTs from "../components/DaosFromYourNFTs";
import AllDaos from "../components/AllDaos";
import Daos from "../api/testDaos.json";
import CheckNFTs from "../api/checkNFTs";
import { uauth } from "../api/unstoppableAuth";
import { ConnectWallet } from "../api/mintNFT";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

/**
 *
 * doc: https://github.com/nft-api/nft-api#supported-blockchains
 *
 */

const HomeContainer = () => {
  const { user, setUser } = useContext(UserContext);
  const [userDAOsMatch, setUserDAOsMatch] = useState([]);

  // const handleAuthenticate = async () => {
  //   try {
  //     const data = await CheckNFTs();
  //     if (data?.length > 0) {
  //       const matchedDao = Daos.filter(
  //         (dao) =>
  //           String(dao.contract_address).toLowerCase() ===
  //           String(data[0].token_address).toLowerCase()
  //       );

  //       if (matchedDao) {
  //         setUserDAOsMatch(matchedDao);
  //       }
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleAuthenticate = async () => {
    try {
      const data = await Moralis.authenticate();
      setUser(data);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUAuthenticate = async () => {
    try {
      const data = await Moralis.authenticate(uauth);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async () => {
    const uauthMoralisConnector = new uauth.connector();

    const user = await uauthMoralisConnector.uauth.user();
    console.log(user);
  };

  useEffect(() => {
    if (user) {
      const UdUser = getUser();
    }
  }, [user]);

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
