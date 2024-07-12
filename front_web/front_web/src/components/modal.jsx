import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { storeSkill } from "../services/skillService";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)", //centraliza o modal
  width: 800,
  bgcolor: "background.paper",
  border: "3px solid #000",
  boxShadow: 24, // sombreamento da caixa
  p: 4, //padding
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function ModalAddSkill() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [nome, setNome] = useState();
  const [url, setUrl] = useState();
  const [descricao, setDescricao] = useState();
  const [versao, setVersao] = useState();

  // console.log("Console nome", nome);
  // console.log("Console url", url);
  // console.log("Console descricao", descricao);
  // console.log("Console versao", versao);

  const verificarCampos = () => {
    if (
      nome === undefined ||
      url === undefined ||
      descricao === undefined ||
      versao === undefined
    ) {
      alert("Nenhum campo pode estar vazio!");
    } else {
      const objetoCadastro = {
        idSkill: "",
        nome: nome,
        url: url,
        descricao: descricao,
        level: versao,
      };

      console.log("Objeto cadastro", objetoCadastro);
      const cadastroSkill = async () => {
        const cadastroHabilidade = await storeSkill(objetoCadastro);
        setNome("");
        setUrl("");
        setDescricao("");
        setVersao("");
      };
      cadastroSkill();
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          color: "black",
          background: "#f1f1f1",
          width: "100%",
        }}
      >
        Adicionar Skill
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{ marginBottom: "5vh" }}
          >
            Cadastro de Skill
          </Typography>


          <Box component="form">
            <Box component="div">
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Nome da skill
              </Typography>
              <input
                type="text"
                placeholder="Nome da skill"
                className="input-skill"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Box>

            <Box component="div">
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                URL da imagem
              </Typography>
              <input
                type="text"
                placeholder="URL"
                className="input-skill"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Box>
            <Box component="div">
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Versao
              </Typography>
              <input
                type="text"
                placeholder="Versao"
                className="input-skill"
                value={versao}
                onChange={(e) => setVersao(e.target.value)}
              />
            </Box>
            <Box component="div">
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Descrição da skill
              </Typography>
              <input
                type="text"
                placeholder="Descricao"
                className="input-skill"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Box>
          </Box>

          <Box
            component="div"
            sx={{ display: "flex", justifySelf: "flex-end", gap: "2vw" }}
          >
            <Button
              onClick={handleClose}
              sx={{
                color: "black",
                background: "#f1f1f1",
                width: "8vw",
                height: "6vh",
                fontSize: "1.2rem",
              }}
            >
              Sair
            </Button>
            <Button
              sx={{
                color: "black",
                background: "#f1f1f1",
                width: "8vw",
                height: "6vh",
                fontSize: "1.1rem",
              }}
              onClick={() => verificarCampos()}
            >
              Cadastrar Skill
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
