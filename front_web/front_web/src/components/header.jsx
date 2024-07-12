import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ModalAddSkill from "./modal";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/loginContext";

import "@fontsource/roboto/500.css";

export default function HeaderCabecalho() {
  const { sairLogin } = useContext(Context);
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

          <Button
            sx={{
              color: "black",
              background: "#f1f1f1",
              width: "8%",
              marginRight: "3%",
            }}
            onClick={() => sairLogin()}
          >
            Sair
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
