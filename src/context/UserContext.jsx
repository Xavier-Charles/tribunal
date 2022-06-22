import React, { useState, createContext } from "react";

/**
 *
 * Gatsby Context API: https://medium.com/swlh/gatsbys-global-state-management-with-react-s-context-5f8064e93351
 *
 */

export const UserContext = createContext(null);
const appId = import.meta.env.VITE_MORALIS_APP_ID;
const serverUrl = import.meta.env.VITE_MORALIS_SERVER_URL;

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [UdUser, setUdUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, UdUser, setUdUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
