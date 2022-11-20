import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import contractABI from "./createTribunalABI.json";

const contract_address = import.meta.env.VITE_CREATE_TRIB_CONTRACT_ADDRESS;

const ConnectWallet = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Metamask not detected");
      return;
    }
    let chainId = await ethereum.request({ method: "eth_chainId" });
    console.log("Connected to chain:" + chainId);

    const polygonChainId = "0x89";
    const metisChainId = 0x257;

    if (chainId !== polygonChainId && chainId !== metisChainId) {
      alert("You are not connected to the Polygon mainnet or Metis testnet, please switch.");
      return;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    return accounts[0];
  } catch (error) {
    console.log("Error connecting to metamask", error);
    return null;
  }
};

// Creates transaction to create a Tribunal
export const useCreateTribunalAction = () => {
  const [isCreating, setisCreating] = useState(false);
  const [created, setcreated] = useState(false);
  const [hash, setHash] = useState(null);
  const [error, setError] = useState(null);
  const [newTrib, setNewTrib] = useState(null);

  const createTrib = async (walletAddress, fileUrl, mintFee) => {
    let newT = {};
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = await provider.getSigner();

        const tribContract = new ethers.Contract(
          contract_address,
          contractABI, // use list due to https://github.com/ethers-io/ethers.js/issues/1238
          signer
        );

        const tribTx = await tribContract.createTrib(
          walletAddress,
          fileUrl,
          mintFee,
          {
            gasLimit: 5_000_000,
          }
        );

        //the transaction
        // console.log("Mining....", tribTx.hash);
        setisCreating(true);

        let tx = await tribTx.wait();
        setcreated(true);
        // console.log("Mined!", tx);
        // console.log("Mined!", tribTx);

        const iface = new ethers.utils.Interface(contractABI);
        tx.logs.map((log) => {
          try {
            let decodedData = iface.parseLog(log);
            if (decodedData.args[0]) {
              setNewTrib(decodedData.args[0]);
              newT.one = decodedData.args[0];
            }
          } catch (e) {
            console.warn({ e });
          }
        });

        setHash(tribTx.hash);
        setisCreating(false);
        // console.log(
        //   `Mined, see transaction: https://polygonscan.com/tx/${tribTx.hash}`
        // );
      } else {
        setError("Having trouble connecting to metamask");
      }
      return newT.one;
    } catch (error) {
      console.log("Error creating", error);
      setError(error.message);
      return newT.one;
    }
  };
  return { isCreating, created, hash, error, createTrib, newTrib };
};
