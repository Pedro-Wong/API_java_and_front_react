import api from "./api";

export const storeSkill = async (itemSkill) => {
  try {
    const response = await api.post("habilidades/salvarHabilidades", itemSkill);
    console.log("Cadastro de skill efetuado com sucesso!", response);
    alert("Cadastro efetuado com sucesso!");
  } catch (error) {
    console.log("Erro em cadastrar skill", error);
  }
};

export const getSkills = async () => {
  try {

    const arraySkills = [];
    const response = await api.get("habilidades/listarHabilidades");
    // console.log("Pegando skills", response.data);


    for (let key in response.data) {
    //   console.log(key);
      const newObjSkills = {
        ...response.data[key],
        id: key,
      };
      arraySkills.push(newObjSkills);
    }

    // console.log(arraySkills);
    return arraySkills;



  } catch (erro) {
    console.log("Erro em pegar skills", erro);
  }
};
