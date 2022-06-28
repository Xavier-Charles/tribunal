import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import contractABI from "./createTribunalABI.json";

const og_contract_address = import.meta.env.VITE_CREATE_TRIB_CONTRACT_ADDRESS;

export const ConnectWallet = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Metamask not detected");
      return;
    }
    let chainId = await ethereum.request({ method: "eth_chainId" });
    console.log("Connected to chain:" + chainId);

    const polygonChainId = "0x89";

    if (chainId !== polygonChainId) {
      alert("You are not connected to the Polygon mainnet, please switch.");
      return;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    return accounts[0];
  } catch (error) {
    console.log("Error connecting to metamask", error);
    return null;
  }
};

// Creates transaction to mint NFT on clicking Mint button
export const useMintNftAction = (dao) => {
  const [isMinting, setisMinting] = useState(false);
  const [minted, setMinted] = useState(false);
  const [hash, setHash] = useState(null);
  const [error, setError] = useState(null);

  const mintNFT = async () => {
    try {
      const { ethereum } = window;
      console.log("called 1");
      if (ethereum) {
        const userAddress = await ConnectWallet();
        console.log(userAddress);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = await provider.getSigner();
        console.log("called 2");

        const nftContract = new ethers.Contract(
          og_contract_address,
          contractABI, // use list due to https://github.com/ethers-io/ethers.js/issues/1238
          signer
        );

        const nftTx = await nftContract.mintChildNFT(
          dao.contract_address,
          userAddress,
          {
            gasLimit: 5_000_000,
            value: ethers.utils.parseEther(String(dao.mintFee)),
          }
        );
        console.log("called 3");

        //the transaction
        // console.log("Minting....", nftTx.hash);
        setisMinting(true);

        let tx = await nftTx.wait();
        setMinted(true);
        // console.log("Mined!", tx);

        setHash(nftTx.hash);
        setisMinting(false);
        console.log("called 4");

        // console.log(
        //   `Mined, see transaction: https://Ropsten.etherscan.io/tx/${nftTx.hash}`
        // );
      } else {
        // console.log("Ethereum object doesn't exist!");
        setError("Having trouble connecting to metamask");
      }
    } catch (error) {
      console.log("Error minting", error);
      setError(error.message);
    }
  };
  return { isMinting, minted, hash, error, mintNFT };
};
