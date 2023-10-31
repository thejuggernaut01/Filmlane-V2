import React from "react";
import { Hanko } from "@teamhanko/hanko-elements";

export const Context = React.createContext();

// eslint-disable-next-line react/prop-types
export function Provider({ children }) {
  const hankoApi = import.meta.env.VITE_HANKO_API_URL;
  const hanko = new Hanko(hankoApi);

  const email = hanko.session.get();

  const value = {
    email,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
