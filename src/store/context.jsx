import React, { useEffect, useState } from "react";

import { Hanko, UnauthorizedError } from "@teamhanko/hanko-frontend-sdk";

export const Context = React.createContext();

// eslint-disable-next-line react/prop-types
export function Provider({ children }) {
  const [data, setData] = useState();
  const hankoApi = import.meta.env.VITE_HANKO_API_URL;
  const hanko = new Hanko(hankoApi);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await hanko.user.getCurrent();
        setData(user);

        // A valid JWT is in place so that the user object was able to be fetched.
      } catch (e) {
        if (e instanceof UnauthorizedError) {
          // Display an error or prompt the user to login again. After a successful call to `hanko.webauthn.login()`,
          // `hanko.password.login()` or `hanko.passcode.finalize()` a JWT will be issued and `hanko.user.getCurrent()`
          // would succeed.
        }
      }
    };

    fetchData();
  }, []);

  const value = {
    data,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
