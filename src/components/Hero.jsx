import React from 'react'
import ConnectWallet from './ConnectWallet';

const Hero = ({ handleAuthenticate }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container max-w-7xl px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-serif font-medium mb-2 text-gray-900">
            Tribunal
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-600 mt-5 max-w-xl">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <ConnectWallet handleAuthenticate={handleAuthenticate} />
      </div>
    </section>
  );
};

export default Hero