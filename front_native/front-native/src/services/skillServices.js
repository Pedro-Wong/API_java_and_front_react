import api from "./api";


export const getSkills = async () => {
    try {
        const response = await api.get("habilidades/listarHabilidades");
        console.log("Get da API: ", response)


    } catch (error) {
        console.log("Erro ao pegar as skills da Api: ", error)
    }


}

export const saveSkills = async (itemSkill) => {
    try {
        const response = await api.post("habilidades/salvarHabilidades", itemSkill)
    } catch (error) {
        console.log("Erro ao salvar os dados: ", error)
    }
}