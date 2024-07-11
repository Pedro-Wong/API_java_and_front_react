import api from "./api";

export const storeUsuario = async (itemUsuario) => {
  try {
    const response = await api.post("usuarios/cadastrarUsuarios", itemUsuario);
    console.log("Cadastro efetuado com sucesso!", response);
  } catch (error) {
    console.log("Erro em cadastrar usuario", error);
  }
};
