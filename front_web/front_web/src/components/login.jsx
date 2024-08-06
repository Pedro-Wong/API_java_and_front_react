import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useState, useContext } from "react";
import Alert from "@mui/material/Alert";
import { Context } from "../context/loginContext";

import Checkbox from "@mui/material/Checkbox";

export function Login() {
  const { logar, loginRoutes } = useContext(Context);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const [loginMessage, setLoginMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const validacaoLogin = () => {
    if (usuario === "" && senha === "") {
      // alert("Preencha todos os campos!");
      setLoginMessage("Preencha todos os campos!");
      setAlertSeverity("error");
      setShowAlert(true);
    } else if (usuario === "") {
      setLoginMessage("Preencha o nome do usuário");
      setAlertSeverity("error");
      setShowAlert(true);
    } else if (senha === "") {
      setLoginMessage("Preencha a senha");
      setAlertSeverity("error");
      setShowAlert(true);
    } else {
      // terminar login
      alert("Login efetuado com sucesso!");
      loginRoutes();
      setUsuario("");
      setSenha("");
    }
  };

  return (
    <Box
      component="main"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="section"
        sx={{
          background: "#f1f1f1",
          width: "50vw",
          height: "45vh",
          borderRadius: 5,
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Login
          </Typography>
          <TextField
            id="username"
            label="Nome de usuário"
            variant="outlined"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            sx={{ width: "25vw", background: "white" }}
          />
          <TextField
            id="password"
            label="Senha"
            type="password"
            variant="outlined"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            sx={{ width: "25vw", background: "white" }}
          />
          {showAlert && (
            <Alert severity={alertSeverity} onClose={() => setShowAlert(false)}>
              {loginMessage}
            </Alert>
          )}
          <Button
            sx={{
              color: "white",
              background: "#0066cb",
              width: "20vw",
              height: "5vh",
            }}
            onClick={() => validacaoLogin()}
          >
            Entrar
          </Button>
          <Button
            sx={{
              color: "white",
              background: "#0066cb",
              width: "20vw",
              height: "5vh",
            }}
            onClick={() => navigate("/signUp")}
          >
            Cadastre-se
          </Button>
          <Button
            sx={{
              color: "white",
              background: "#0066cb",
              width: "20vw",
              height: "5vh",
            }}
            onClick={() => navigate("/newLogin")}
          >
            Novo login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
