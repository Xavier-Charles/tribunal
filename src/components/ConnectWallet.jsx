import React from "react";
import Metamask from "../assets/svg/metamask.svg?component";
import Unstoppable from "../assets/svg/unstoppable.svg?component";

const ConnectWallet = ({ handleAuthenticate, handleUAuthenticate }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container max-w-xl py-12 mx-auto">
        <div className="w-full flex flex-col sm:flex-row items-center mx-auto">
          <h3 className="flex-grow text-center text-base title-font text-gray-600 mb-5">
            {/* Filter Daos by your NFTs. Switch to{" "}
            <span className="font-bold">Ropsten</span> and Connect your{" "}
            <span className="font-bold">Metamask</span> Wallet. */}
           Connect Wallet to filter DAOs by your NFTs.
          </h3>
        </div>
        <div className="flex w-full justify-center">
          <button
            onClick={handleAuthenticate}
            className="flex-shrink-0 flex text-cadet border-gold border py-2 px-6 focus:outline-none rounded text-lg mt-10 sm:mt-0 mr-2"
          >
            <Metamask className="w-[22px] mr-2 self-center" />
             Metamask
          </button>
          <button
            onClick={handleUAuthenticate}
            className="flex-shrink-0 flex text-cadet border-blue-800 border py-2 px-6 focus:outline-none rounded text-lg mt-10 sm:mt-0 ml-2"
          >
            <Unstoppable className="w-6 mr-2" />
             Unstoppable
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectWallet;
