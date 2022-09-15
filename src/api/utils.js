// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export const getProvider = () => {
  const coinbaseWallet = new CoinbaseWalletSDK({
    appName: "GameHaus",
    appLogoUrl: "https://i.imgur.com/KGYPsq3.png",
  });
  return coinbaseWallet.makeWeb3Provider();
};

export async function authenticate(props) {
  try {
    const user = await Moralis.authenticate(props);
    return user;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const getVerificationMessage = async (address, statement, chainId) => {
  const url = "https://authapi.moralis.io/challenge/request/evm";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-API-KEY": import.meta.env.VITE_MORALIS_WEB3_API_KEY,
    },
    body: JSON.stringify({
      timeout: 15,
      domain: "tribunals.vercel.app",
      chainId,
      address,
      uri: window.location.origin,
      statement,
    }),
  };
  const data = await (await fetch(url, options)).json();

  return data;
};

export const cbAuthenticate = async () => {
  const provider = getProvider();
  const accounts = await provider.request({
    method: "eth_requestAccounts",
  });
  const chainId = await provider.request({
    method: "eth_chainId",
  });

  if (accounts[0] && chainId) {
    const msg = "Sign in to Tribunals";
    const { id, message, profileId } = await getVerificationMessage(
      accounts[0],
      msg,
      chainId
    );

    const signature = await provider.request({
      method: "personal_sign",
      params: [message, accounts[0]],
    });

    console.log(accounts, signature, provider, chainId);

    const url = "https://authapi.moralis.io/challenge/verify/evm";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-KEY": import.meta.env.VITE_MORALIS_WEB3_API_KEY,
      },
      body: JSON.stringify({ message, signature }),
    };

    const user = await (await fetch(url, options)).json();

    console.log(user);
    return user
  }
};

export const truncateWithEllipsis = (s, n, type) => {
  const maxLen = n !== undefined ? n : 12;

  if (s.length > maxLen) {
    if (type === "end") {
      return `${s.substr(0, maxLen)}...`;
    }
    return `${s.substr(0, Math.floor(maxLen / 2))}...${s.substr(
      s.length - Math.floor(maxLen / 2)
    )}`;
  }
  return s;
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
