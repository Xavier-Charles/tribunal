import React from "react";

const ConnectWallet = ({ handleAuthenticate }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container max-w-xl py-12 mx-auto">
        <div className="w-full flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h3 className="flex-grow sm:pr-16 text-base font-medium title-font text-gray-500">
            Filter Daos by your NFTs. Switch to{" "}
            <span className="font-bold">Ropsten</span> and Connect
            your <span className="font-bold">Metamask</span> Wallet.
          </h3>
          <button
            onClick={handleAuthenticate}
            className="flex-shrink-0 text-cadet bg-gold border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg mt-10 sm:mt-0"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectWallet;
