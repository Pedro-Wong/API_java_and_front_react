import { createContext, useState } from "react";

export const Context = createContext();

export const LoginContext = ({ children }) => {
  const [logar, setLogar] = useState(false);

  const loginRoutes = () => {
    setLogar(true);
  };
  const sairLogin = () => {
    setLogar(false);
  };
  
  const contextValue = {
    logar: logar,
    loginRoutes: loginRoutes,
    sairLogin: sairLogin,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
