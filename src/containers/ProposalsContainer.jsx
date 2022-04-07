import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProposalsList from "../components/ProposalComponents/ProposalsList";
import SideBar from "../components/ProposalComponents/SideBar";
import Daos from "../api/testDaos.json";
import Proposals from "../api/testProposals.json";


const ProposalsContainer = () => {
  const {slug} = useParams()

  const dao = Daos.find((daoObj) => daoObj.slug === slug);
  const proposals = Proposals.find((proObj) => proObj.slug === slug);

  return (
    <>
      <Navbar />
      <div id="content" className="pb-6 pt-14">
        <div
          className="px-0 md:px-4 max-w-7xl mx-auto"
        >
          <SideBar dao={dao} />
          <ProposalsList proposals={proposals} />
        </div>
      </div>
    </>
  );
};

export default ProposalsContainer;
