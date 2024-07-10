import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

import Checkbox from "@mui/material/Checkbox";

export function Login() {
  const navigate = useNavigate();

  return (
    <Box
      component="body"
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
          height: "40vh",
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
            sx={{ width: "25vw", background: "white" }}
          />
          <TextField
            id="password"
            label="Senha"
            type="password"
            variant="outlined"
            sx={{ width: "25vw", background: "white" }}
          />
          <Button
            sx={{
              color: "white",
              background: "#0066cb",
              width: "23vw",
              height: "5vh",
            }}
          >
            Entrar
          </Button>
          <Button
            sx={{
              color: "white",
              background: "#0066cb",
              width: "23vw",
              height: "5vh",
            }}
            onClick={() => navigate("/signUp")}
          >
            Cadastre-se
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
