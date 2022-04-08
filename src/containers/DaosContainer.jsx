import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProposalsList from "../components/ProposalComponents/ProposalsList";
import SideBar from "../components/SideBar";
import Daos from "../api/testDaos.json";
import Proposals from "../api/testProposals.json";
import AboutComponent from "../components/AboutComponent";
import NewProposal from "../components/ProposalComponents/NewProposal";

const DaosContainer = ({ type }) => {
  const { slug } = useParams();

  const dao = Daos.find((daoObj) => daoObj.slug === slug);

  return (
    <>
      <Navbar />
      <div id="content" className="pb-6 pt-14">
        <div className="px-0 md:px-4 max-w-7xl mx-auto">
          <SideBar dao={dao} type={type} />
          {type === "about" ? (
            <AboutComponent dao={dao} />
          ) : type === "about" ? (
            <ProposalsList proposals={Proposals} dao={dao} />
          ) : (
            <NewProposal dao={dao} />
          )}
        </div>
      </div>
    </>
  );
};

export default DaosContainer;
