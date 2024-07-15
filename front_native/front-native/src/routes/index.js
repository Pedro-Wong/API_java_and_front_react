import { PublicRoutes } from "./publicRoutes";
import { PrivateRoutes } from "./privateRoutes";
import { useState } from "react";

export const Rotas= () => {
  const [teste, setTeste] = useState(true);

  return (
    <>
      {teste ? <PublicRoutes /> : <PrivateRoutes />}
    </>
     
    
  );
};
