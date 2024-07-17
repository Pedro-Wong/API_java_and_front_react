import api from "./api";

export const salveUser = async (itemUser) => {
  try {
    const response = await api.post("usuarios/cadastrarUsuarios", itemUser);
  } catch (error) {
    console.log("Erro em salvar usuário", error);
  }
};
