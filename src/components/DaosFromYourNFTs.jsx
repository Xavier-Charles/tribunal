import React from "react";
import Daos from "./daos";

const DaosFromYourNFTs = ({ userNFTs, hasUser }) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container max-w-7xl px-5 pt-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Daos From Your NFTs
              </h1>
              <div className="h-1 w-44 bg-gold rounded"></div>
            </div>
          </div>
        </div>
      </section>
      {userNFTs?.length > 0 ? (
        <Daos />
      ) : (
        <div className="w-full max-w-lg text-center flex justify-center my-6 mx-auto">
          <h1 className="sm:text-base text-2xl font-mono  mb-2 text-gray-400">
            {hasUser
              ? "No DAOs on Tribunal Matched Your NFTs"
              : "When You Connect Your Wallet, DAOs That Match Your NFTs Will Be Displayed Here."}
          </h1>
        </div>
      )}
    </>
  );
};

export default DaosFromYourNFTs;
