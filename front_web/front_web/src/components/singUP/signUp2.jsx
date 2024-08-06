import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./login.css";
import {
  InputBoxStyle,
  BoxLoginStyle,
  SideBoxRightStyle,
  ButtonStyle,
  MainStyle,
  SideBoxLeftStyle,
  LogoStyle,
  RememberBox,
} from "./styleSignUp";
import LoginIcon from "@mui/icons-material/Login";
import ImgLogo from "../../assets/img/logo.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@fontsource/roboto/400.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

const defaultTheme = createTheme();

export default function NewLogin() {
  const [state, setState] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const exibPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={MainStyle}>
        <CssBaseline />
        <Grid item xs={4} sm={6} md={7} sx={SideBoxLeftStyle}>
          <Grid item component="Image">
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <img src={ImgLogo} style={LogoStyle} />
              <h1>Neki GPT</h1>
            </motion.div>
          </Grid>
        </Grid>

        <Grid
          item
          xs={6}
          sm={6}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={SideBoxRightStyle}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Box sx={BoxLoginStyle}>
              <Avatar sx={{ m: 1, bgcolor: "#04254f" }}>
                <LoginIcon />
              </Avatar>
              <Typography component="h1" variant="h3">
                Bem-vindo ao login
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={InputBoxStyle}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  // label="Login"
                  placeholder="Login"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setLogin(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  // label="Senha"
                  placeholder="Senha"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                ></TextField>
                <Box component="div" sx={RememberBox}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Lembrar usuário"
                  />

                  <VisibilityIcon
                    sx={{ alignSelf: "center" }}
                    onClick={() => exibPassword()}
                  />
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={ButtonStyle}
                >
                  ENTRAR
                </Button>
                <Grid container sx={{ marginBottom: "1.2vh" }}>
                  <Grid item xs>
                    <Link href="#" variant="body2" sx={{ fontSize: "1rem" }}>
                      Esqueceu a senha?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="/signUp"
                      variant="body2"
                      sx={{ fontSize: "1rem" }}
                    >
                      {"Não possui conta? Cadastre-se"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
