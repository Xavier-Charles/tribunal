import React, { useContext, useEffect, useState } from "react";
import MintComponent from "../components/MintComponent";
import Navbar from "../components/Navbar";
import { useMintNftAction } from "../api/mintNFT";
import { TribunalsContext } from "../context/TribunalsContext";
import { useParams } from "react-router-dom";
import { scrollToTop } from "../api/utils";

const MintContainer = () => {
  const { slug } = useParams();
  const { tribunals } = useContext(TribunalsContext);

  const [dao, setDao] = useState(null);
  const { isMinting, minted, hash, error, mintNFT } = useMintNftAction(
    dao?.contract_address
  );

  useEffect(() => {
    scrollToTop();
    const dao = tribunals.find((daoObj) => daoObj.slug === slug);
    setDao(dao);
  }, [tribunals]);

  return (
    <>
      <Navbar />
      {dao && (
        <MintComponent
          isMinting={isMinting}
          minted={minted}
          hash={hash}
          error={error}
          mintNFT={mintNFT}
          dao={dao}
        />
      )}
    </>
  );
};

export default MintContainer;
