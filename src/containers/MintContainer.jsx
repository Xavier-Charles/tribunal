import React from "react";
import MintComponent from "../components/MintComponent";
import Navbar from "../components/Navbar";
import { useMintNftAction } from "../api/mintNFT";


const MintContainer = () => {
    const { isMinting, minted, hash, error, mintNFT } = useMintNftAction();

  return (
    <>
      <Navbar />
      <MintComponent
        isMinting={isMinting}
        minted={minted}
        hash={hash}
        error={error}
        mintNFT={mintNFT}
      />
    </>
  );
};

export default MintContainer;
