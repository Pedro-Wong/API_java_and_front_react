import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import Button from "@mui/material/Button";

import SkillCard from "./card";
import "./components.css";
import { getSkills } from "../services/skillService";

export function MainPrincipal() {

  return (
    <>
      <Box className="principal-main" component="main" sx={{ marginBottom: 2 }}>
        <Typography
          style={{ marginBottom: 10, textAlign: "center", fontSize: "2.5rem" }}
          variant="h4"
          component="div"
        >
          Painel de Skills
        </Typography>
        <Box component="section">
          <SkillCard />
        </Box>
      </Box>
    </>
  );
}
