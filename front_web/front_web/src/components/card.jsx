import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function SkillCard() {
  return (
    <Card sx={{ maxWidth: 280 }} component="div">
      <CardMedia
        sx={{ height: 140 }}
        image="../assets/img/linux.jpg"
        title="green iguana"
      />
      <CardContent sx={{ justifyContent: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          Nome da Skill
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
