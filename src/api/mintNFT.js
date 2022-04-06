import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import contractABI from "./TribunalNFT.json";

const contract_address = import.meta.env.VITE_TEST_CONTRACT_ADDRESS;
const token_uri = import.meta.env.VITE_TEST_TOKEN_URI;

export const ConnectWallet = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      // console.log("Metamask not detected");
      return;
    }
    let chainId = await ethereum.request({ method: "eth_chainId" });
    // console.log("Connected to chain:" + chainId);

    const ropstenChainId = "0x3";

    if (chainId !== ropstenChainId) {
      alert("You are not connected to the Ropsten Testnet!");
      return;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    // console.log("Found account", accounts[0]);
    return accounts[0];
  } catch (error) {
    // console.log("Error connecting to metamask", error);
  }
};

// Creates transaction to mint NFT on clicking Mint button
export const useMintNftAction = () => {
  const [isMinting, setisMinting] = useState(false);
  const [minted, setMinted] = useState(false);
  const [hash, setHash] = useState(null);
  const [error, setError] = useState(null);

  const mintNFT = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const userAddress = ConnectWallet();
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = await provider.getSigner();

        const nftContract = new ethers.Contract(
          contract_address,
          contractABI.abi, // use list due to https://github.com/ethers-io/ethers.js/issues/1238
          signer
        );

        const nftTx = await nftContract.mintNFT(userAddress, token_uri, {
          gasLimit: 500_000,
        });
        // console.log(nftTx);

        //the transaction
        // console.log("Minting....", nftTx.hash);
        setisMinting(true);

        let tx = await nftTx.wait();
        setMinted(true);
        // console.log("Mined!", tx);

        setHash(nftTx.hash);
        // console.log(
        //   `Mined, see transaction: https://Ropsten.etherscan.io/tx/${nftTx.hash}`
        // );

      } else {
        // console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      // console.log("Error minting", error);
      setError(error.message);
    }
  };
  return { isMinting, minted, hash, error, mintNFT };
};
