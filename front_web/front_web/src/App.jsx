import { useState } from "react";
import "./App.css";
import { IndexNavigation } from "./routes/indexRoutes";

function App() {
  const [count, setCount] = useState(0);
  const state = true;

  return (
    <>
      <IndexNavigation />
    </>
  );
}

export default App;
