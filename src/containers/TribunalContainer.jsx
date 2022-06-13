import React from "react";
import Navbar from "../components/Navbar";
import { useMintNftAction } from "../api/mintNFT";
import NewTribunalForm from "../components/NewTribunalForm";

const TribunalContainer = () => {
  const { isMinting, minted, hash, error, mintNFT } = useMintNftAction();


  return (
    <>
      <Navbar />
      <div id="content" className="pb-6 pt-28 lg:pt-24">
        <div className="md:px-4 max-w-7xl mx-auto px-8">
          <h1 className="mb-4 text-3xl font-serif text-gray-800">
            Create A Tribunal
          </h1>

          <div className="mt-20">
            <NewTribunalForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default TribunalContainer;
