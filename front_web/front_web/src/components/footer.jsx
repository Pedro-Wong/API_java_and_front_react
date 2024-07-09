import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/roboto/500.css";

export default function FooterRodape() {
  return (
    <footer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{ background: "#0066cb", color: "#f1f1f1", opacity: 0.9 }}
          position="static"
        >
          <Toolbar sx={{ textAlign: "center" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Desenvolvido por Pedro Henrique de Azevedo Wong Rego
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </footer>
  );
}
