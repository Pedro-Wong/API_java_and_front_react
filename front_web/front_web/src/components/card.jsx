import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalEditSkill from "./edit";
import { getSkills } from "../services/skillService";
import api from "../services/api";
import { Box } from "@mui/material";

export default function SkillCard() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const response = async () => {
      const apiSkills = await getSkills();
      setSkills(apiSkills);
      console.log("Vindo da API", apiSkills);
    };

    response();
  }, []);


  // const idDelete =  async() => {
  //   const delete = await 
  // }






  const rendeSkils = () => {
    return skills.map((itemSkill) => {
      return (
        <Box
          key={itemSkill.idSkill}
          component="div"
          sx={{ background: "#f1f1f1", width: "20vw" }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image="../assets/img/linux.jpg"
            title="green iguana"
          />
          <CardContent sx={{ justifyContent: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              {itemSkill.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {itemSkill.descricao}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <ModalEditSkill />
            <Button
              sx={{
                color: "black",
                background: "white",
                width: "4vw",
                height: "4vh",
              }}
            >
              Excluir
            </Button>
          </CardActions>
        </Box>
      );
    });
  };

  return (
   
    <Card
      sx={{ width: "100vw", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem" }}
      component="section"
    >
      {rendeSkils()}
    </Card>
  );
}


