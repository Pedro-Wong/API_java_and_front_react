import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getSkills } from "../services/skillService";

export default function SkillCard() {
  const [skills, setSkills] = useState([]);




  
  // useEffect(() => {
  //   const response = async () => {

  //     const apiSkills = await getSkills();
  //     console.log("Vindo da API", apiSkills);
  //     const selectSkill = apiSkills?.map((value) => ({
  //       idSkill: value.idSkill,
  //       nome: value.nome,
  //       url: value.url,
  //       descricao: value.descricao,
  //       level: value.level,
  //       imagem: value.imagem,
  //     }));

  //     console.log("Console select skill MAP", selectSkill);
  //     setSkills(selectSkill);
  //     console.log("UseState Skill", skills);

  //   };


  //   response();



  // }, []);

  //  useEffect(() => {
  //     console.log("Console skills", skills);
  //  }, [])

  return (
    <Card sx={{ maxWidth: 280 }} component="div">
      <CardMedia
        sx={{ height: 140 }}
        image="../assets/img/linux.jpg"
        title="green iguana"
      />
      <CardContent sx={{ justifyContent: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          nome
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descrição sobre a skill
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">Editar</Button>
        <Button size="small">Excluir</Button>
      </CardActions>
    </Card>
  );
}
