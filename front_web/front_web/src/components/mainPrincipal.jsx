import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import SkillCard from "./card";
import "./components.css";

export function MainPrincipal() {
  const rep = () => {
    const cards = [];
    for (let i = 0; i < 15; i++) {
      cards[i] = <SkillCard />;
    }
    return cards;
  };
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
        <Box className="secao-main" component="section">
          {rep()}
        </Box>
      </Box>
    </>
  );
}
