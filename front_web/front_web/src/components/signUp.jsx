import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { storeUsuario } from "../services/usuarioService";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";

export function SignUp() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const [confSenha, setConfSenha] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const verificacaoSenha = () => {
    if (usuario === "" && senha === "" && confSenha === "") {
      // alert("Preencha todos os campos!");
      setAlertMessage("Preencha todos os campos!");
      setAlertSeverity("error");
      setShowAlert(true);
    } else if (usuario === "") {
      // alert("Preencha o campo de nome de usuário!");
      setAlertMessage("Preencha o campo de nome de usuário!");
      setAlertSeverity("error");
      setShowAlert(true);
    } else if (senha === "") {
      // alert("Preencha a senha!");
      setAlertMessage("Preencha a senha!");
      setAlertSeverity("error");
      setShowAlert(true);
    } else if (confSenha === "") {
      // alert("Preencha a confirmação da senha!");
      setAlertMessage("Preencha a confirmação da senha!");
      setAlertSeverity("error");
      setShowAlert(true);
    } else if (senha !== confSenha) {
      // alert("As senhas não conferem!");
      setAlertMessage("As senhas não conferem!");
      setAlertSeverity("error");
      setShowAlert(true);
    } else {
      const objetoCadastro = { idUsuario: "", login: usuario, password: senha };

      const funcCad = async () => {
        console.log("Objeto cadastro", objetoCadastro);
        const response = await storeUsuario(objetoCadastro);
       

        setConfSenha("");
        setSenha("");
        setUsuario("");
        // navigate("/");
        // alert("Cadastro efetuado com sucesso!");
      };
      funcCad();
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
            Cadastre-se
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

          <TextField
            id="confPassword"
            label="Confirme a senha"
            type="password"
            variant="outlined"
            value={confSenha}
            onChange={(e) => setConfSenha(e.target.value)}
            sx={{ width: "25vw", background: "white" }}
          />

          {showAlert && (
            <Alert severity={alertSeverity} onClose={() => setShowAlert(false)}>
              {alertMessage}
            </Alert>
          )}

          <Button
            sx={{
              color: "white",
              background: "#0066cb",
              width: "15vw",
              height: "5vh",
            }}
            onClick={() => verificacaoSenha()}
          >
            Cadastrar
          </Button>
          <Button
            sx={{
              color: "white",
              background: "#0066cb",
              width: "15vw",
              height: "5vh",
            }}
            onClick={() => navigate("/")}
          >
            Voltar para Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
