import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ModalAddSkill from "./modal";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto/500.css";

export default function HeaderCabecalho() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }} component="header">
      <AppBar
        sx={{ background: "#0066cb", color: "#f1f1f1" }}
        position="static"
      >
        <Toolbar>
          {/* <Button
            sx={{
              color: "black",
              background: "#f1f1f1",
              width: "8%",
              marginRight: "3%",
            }}
            onClick={() => navigate("/modal")}
          >
            Adicionar Skill
          </Button> */}
          <ModalAddSkill/>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "3%" }}>
            Nome do Usuario
          </Typography>

          {/* Teste página de login */}
          <Button
            sx={{
              color: "black",
              background: "#f1f1f1",
              width: "8%",
              marginRight: "3%",
            }}
            onClick={() => navigate("/login")}
          >
            ir para login
          </Button>

          {/* Teste página de cadastro */}
          <Button
            sx={{
              color: "black",
              background: "#f1f1f1",
              width: "8%",
              marginRight: "3%",
            }}
            onClick={() => navigate("/signUp")}
          >
            Cadastrar
          </Button>

          <Button
            sx={{
              color: "black",
              background: "#f1f1f1",
              width: "5%",
            }}
          >
            Sair
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
