import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import "./home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DaosFromYourNFTs from "../components/DaosFromYourNFTs";
import AllDaos from "../components/AllDaos";
import Daos from "../api/testDaos.json";
import CheckNFTs from "../api/checkNFTs";
import {
  createProposal,
  getProposal,
  getProposals,
  updateProposal,
} from "../api/proposals";

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
      // const test = await getProposals()
      // const test = await getProposal("62516d48b2c46d7256779c93");
      // const data = {
      //   title: "Decentralize DAO Allocation++",
      //   desc: "This proposal is critical to enabling the workstream to continue progress toward a decentralized Dao. If this proposal passes, the treasury will empower a group of team and community members with a budget of 41.3k tokens, managed by a public 2 of 3 multisig including the following members: @phutchins, @thelostone-mc, @bendi",
      //   author: "simona.eth",
      //   startDate: "2022-04-01",
      //   endDate: "2022-04-12",
      //   votes: {
      //     "bobjiang.eth": "for",
      //     "acupt.eth": "against",
      //     "0xcf8E24538E6e8c6D7cA711F84539aEac0892e28b": "for",
      //     "superalloy.eth": "for",
      //     "dadababa.eth": "against",
      //   },
      // };
      // const test = await createProposal(data);
      // const id = "625193774faf27ae8eed6c20";
      // const data2 = {
      //   title: "Decentralize DAO Allocation++qwertyuiop",
      // };
      // const test = await updateProposal(id, data2);
      // console.log(test);
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <Hero handleAuthenticate={handleAuthenticate} />
      {/* <DaosFromYourNFTs hasUser={!!user} userDAOsMatch={userDAOsMatch} /> */}
      <DaosFromYourNFTs userDAOsMatch={userDAOsMatch} />
      <AllDaos />
    </>
  );
};

export default HomeContainer;
