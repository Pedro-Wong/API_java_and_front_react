import { useState } from "react";



import PrivateRoutesNavigation from "./privateRoutes";
import PublicRoutesNavigation from "./publicRoutes";

export function IndexNavigation() {
  const [count, setCount] = useState(0);
  const state = true;

  return (
    <>{state ? <PrivateRoutesNavigation /> : <PublicRoutesNavigation />}</>
  );
}
