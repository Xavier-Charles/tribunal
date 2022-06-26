import React, { useState, createContext, useEffect } from "react";
import { getTribunals } from "../api/tribunals";
import { authenticate, scrollToTop, truncateWithEllipsis } from "../api/utils";

/**
 *
 * Gatsby Context API: https://medium.com/swlh/gatsbys-global-state-management-with-react-s-context-5f8064e93351
 *
 */

export const TribunalsContext = createContext(null);

const TribunalsContextProvider = ({ children }) => {
  const [tribunals, setTribunals] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getTribunals();
      setTribunals(data);
    })();
  }, []);

  return (
    <TribunalsContext.Provider
      value={{
        tribunals,
      }}
    >
      {children}
    </TribunalsContext.Provider>
  );
};
export default TribunalsContextProvider;
