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

// Creates transaction to create a Tribunal
export const useCreateTribunalAction = () => {
  const [isCreating, setisCreating] = useState(false);
  const [created, setcreated] = useState(false);
  const [txLink, setTxLink] = useState(null);
  const [error, setError] = useState(null);
  const [newTrib, setNewTrib] = useState(null);

  const createTrib = async (tribunalName, walletAddress, fileUrl, mintFee) => {
    let newTribAddress = undefined;
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setError("Having trouble connecting to metamask");
        return;
      }

      const chainId = await ethereum.request({
        method: "eth_chainId",
      });

      const contract_address =
        chainId === metisChainId
          ? contract_address_metis
          : contract_address_polygon;

      const [contractABI, explorer] =
        chainId === metisChainId
          ? [contractABIMetis, metisExplorer]
          : [contractABIPolygon, polygonExplorer];

      if (chainId !== metisChainId && chainId !== polygonChainId) {
        setError(
          "Please change the network to metis testnet or Polygon mainnet"
        );

        return;
      }

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = await provider.getSigner();

      const tribContract = new ethers.Contract(
        contract_address,
        contractABI, // use list due to https://github.com/ethers-io/ethers.js/issues/1238
        signer
      );

      const tribTx =
        chainId === metisChainId
          ? await tribContract.createTribunal(
              tribunalName,
              fileUrl,
              mintFee,
              walletAddress,
              {
                gasLimit: 3_000_000,
              }
            )
          : await tribContract.createTrib(walletAddress, fileUrl, mintFee, {
              gasLimit: 3_000_000,
            });

      setisCreating(true);

      let tx = await tribTx.wait();
      setcreated(true);
      console.log("Mined!", tx);
      console.log("Mined!", tribTx);

      const iface = new ethers.utils.Interface(contractABI);

      tx.logs.map((log, i) => {
        try {
          let decodedData = iface.parseLog(log);

          console.log(`${i}: `, decodedData);
          if (decodedData.name === "childContract" && decodedData.args[0]) {
            setNewTrib(decodedData.args[0]);
            newTribAddress = decodedData.args[0];
          }
        } catch (e) {
          console.warn({ e });
        }
      });

      setTxLink(`${explorer}tx/${tribTx.hash}`);
      setisCreating(false);
      // console.log(
      //   `Mined, see transaction: https://polygonscan.com/tx/${tribTx.hash}`
      // );

      return [newTribAddress, chainId];
    } catch (error) {
      console.log("Error creating", { error });
      setError(error.message);
      return;
    }
  };
  return { isCreating, created, txLink, error, createTrib, newTrib };
};
