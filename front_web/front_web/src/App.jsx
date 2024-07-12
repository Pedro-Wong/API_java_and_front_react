import "./App.css";
import { LoginContext } from "./context/loginContext";
import { IndexNavigation } from "./routes/indexRoutes";

function App() {
  return (
    <LoginContext>
      <IndexNavigation />
    </LoginContext>
  );
}

export default App;
