import React, { useState, createContext, useEffect } from "react";
import { uauth } from "../api/unstoppableAuth";
import {
  authenticate,
  cbAuthenticate,
  scrollToTop,
  truncateWithEllipsis,
} from "../api/utils";

export const UserContext = createContext(null);
// const appId = import.meta.env.VITE_MORALIS_APP_ID;
// const serverUrl = import.meta.env.VITE_MORALIS_SERVER_URL;

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [mUser, setMUser] = useState(null); // Moralis User
  const [udUser, setUdUser] = useState(null);

  const handleAuthenticate = async () => {
    try {
      const data = await authenticate({
        signingMessage: "Sign in to Tribunals",
      });
      setMUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUDAuthenticate = async () => {
    try {
      const data = await Moralis.authenticate(uauth);
      setMUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCBAuthenticate = async () => {
    try {
      const data = await cbAuthenticate();
      // const data = await Moralis.authenticate(uauth);
      setMUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUDUser = async (u) => {
    let user = {};
    try {
      const uauthMoralisConnector = new uauth.connector();

      user = { ...(await uauthMoralisConnector.uauth.user()) };
    } catch (e) {
      if (
        e.message === "Must import UAuth before constructing a UAuth Object"
      ) {
        console.warn(e);
      } else console.error(e);
    }
    if (user?.sub) {
      //Unstoppable signIn
      setUdUser(user);
      setUser({
        name: user.sub,
        address: user.wallet_address,
      });
    }
    if (u?.attributes?.ethAddress) {
      // Metamask signIn
      setUser({
        name: truncateWithEllipsis(u.attributes.ethAddress, 8),
        address: u.attributes.ethAddress,
      });
    } else {
      // CB SignIn
      setUser({
        name: truncateWithEllipsis(u.address, 8),
        address: u.address,
      });
    }
  };

  const signOut = () => {
    setUdUser(null);
    setUser(null);
    setMUser(null);
    scrollToTop();
  };

  const authenticated = !!user;

  useEffect(() => {
    if (mUser) getUDUser(mUser);
  }, [mUser]);

  const moralisUser = {
    username: "Ze7kRiy5JaLIe0RLILuDOydoo",
    authData: {
      moralisEth: {
        id: "0xe70d4bdacc0444caa973b0a05cb6f2974c34af0c",
        signature:
          "0x3eeb9c11f107627503424ef00777d0de019017f99929db790a490372ff27a8d23167ca9560b8a8e48d1a8da87b0fb54f28643ea58cc4454c788b3b6fb32c38ce1b",
        data: "Moralis Authentication\n\nId: PnOQJ53Big0pIgvOByeR5olBogAj8HZdLfGFMjoY:1656258948906",
      },
    },
    createdAt: "2022-06-24T15:43:12.470Z",
    updatedAt: "2022-06-26T15:55:55.426Z",
    accounts: ["0xe70d4bdacc0444caa973b0a05cb6f2974c34af0c"],
    ethAddress: "0xe70d4bdacc0444caa973b0a05cb6f2974c34af0c",
    ACL: {
      M5RU8CTwAK5lmKpJaxaAxGSD: {
        read: true,
        write: true,
      },
    },
    sessionToken: "r:d7e326f6d6839365f3f9761616805e4e",
    objectId: "M5RU8CTwAK5lmKpJaxaAxGSD",
  };

  return (
    <UserContext.Provider
      value={{
        mUser,
        udUser,
        user,
        signOut,
        authenticated,
        handleAuthenticate,
        handleUDAuthenticate,
        handleCBAuthenticate,
        getUDUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
