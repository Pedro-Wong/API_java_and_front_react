import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
};

export default function ModalAddSkill() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Cadastro de Skill
          </Typography>



          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>





          <Box component="div" sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              onClick={handleClose}
              sx={{ color: "black", background: "#f1f1f1", width: "15%" }}
            >
              Sair
            </Button>
            <Button
              onClick={() => alert("cadastrei")}
              sx={{ color: "black", background: "#f1f1f1", width: "20%" }}
            >
              Cadastrar Skill
            </Button>
          </Box>




          
        </Box>
      </Modal>
    </div>
  );
}
