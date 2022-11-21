import { ethers } from "ethers";
import { useState } from "react";
import contractABIPolygon from "./createTribunalABI.json";
import contractABIMetis from "./createTribunalABI-two.json";

import {
  metisChainId,
  metisExplorer,
  polygonChainId,
  polygonExplorer,
} from "./contants";

const contract_address_polygon = import.meta.env
  .VITE_CREATE_TRIB_CONTRACT_ADDRESS_POLYGON;
const contract_address_metis = import.meta.env
  .VITE_CREATE_TRIB_CONTRACT_ADDRESS_METIS;

export const ConnectWallet = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Metamask not detected");
      return;
    }
    let chainId = await ethereum.request({ method: "eth_chainId" });
    console.log("Connected to chain:" + chainId);

    if (chainId !== polygonChainId && chainId !== metisChainId) {
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
  const [txLink, setTxLink] = useState(null);
  const [error, setError] = useState(null);

  const mintNFT = async (chainId) => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setError("Having trouble connecting to metamask");
        return;
      }

      const contract_address =
        chainId === metisChainId
          ? contract_address_metis
          : contract_address_polygon;

      const [contractABI, explorer] =
        chainId === parseInt(metisChainId)
          ? [contractABIMetis, metisExplorer]
          : [contractABIPolygon, polygonExplorer];

      const userAddress = await ConnectWallet();
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = await provider.getSigner();

      const nftContract = new ethers.Contract(
        contract_address,
        contractABI,
        signer
      );

      const nftTx =
        chainId === parseInt(metisChainId)
          ? await nftContract.mintTribNFT(
              dao.contract_address || dao.contractAddress,
              userAddress,
              {
                gasLimit: 3_000_000,
                value: ethers.utils.parseEther(String(dao.mintFee)),
              }
            )
          : await nftContract.mintChildNFT(
              dao.contract_address || dao.contractAddress,
              userAddress,
              {
                gasLimit: 3_000_000,
                value: ethers.utils.parseEther(String(dao.mintFee)),
              }
            );

      setisMinting(true);

      let tx = await nftTx.wait();
      console.log(tx);

      setMinted(true);
      setisMinting(false);
      setTxLink(`${explorer}tx/${tx.transactionHash}`);
    } catch (error) {
      console.log("Error minting", error);
      setError(error.message);
    }
  };
  return { isMinting, minted, txLink, error, mintNFT };
};
