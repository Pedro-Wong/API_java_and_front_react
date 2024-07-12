import PrivateRoutesNavigation from "./privateRoutes";
import PublicRoutesNavigation from "./publicRoutes";
import { Context } from "../context/loginContext";
import { useContext } from "react";
export function IndexNavigation() {
  const {logar} = useContext(Context);
  
  const state = false;

  return (
    <>{logar ? <PrivateRoutesNavigation /> : <PublicRoutesNavigation />}</>
  );
}
