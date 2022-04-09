import { ConnectWallet } from "./mintNFT";

const CheckNFTs = async () => {
  const address = await ConnectWallet();
  // const chain = ropsten // use this later
  try {
    const res = await fetch(
      `https://deep-index.moralis.io/api/v2/${address}/nft?chain=ropsten&format=decimal`,
      {
        method: "GET",
        headers: {
          "X-API-Key": import.meta.env.VITE_MORALIS_API_KEY,
        },
      }
    );

    const nfts = (await res.json()).result;

    return nfts;
  } catch (err) {
    console.log({ err });

    return null;
  }
};

export default CheckNFTs;
