import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
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
          <ModalAddSkill />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "3%" }}
          >
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
            // onClick={() => navigate("/login")}
          >
            Sair
          </Button>

          {/* Teste de rota página de cadastro */}
          {/* <Button
            sx={{
              color: "black",
              background: "#f1f1f1",
              width: "8%",
              marginRight: "3%",
            }}
            onClick={() => navigate("/signUp")}
          >
            Cadastrar
          </Button> */}

          {/* <Button
            sx={{
              color: "black",
              background: "#f1f1f1",
              width: "5%",
            }}
          >
            Sair
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
