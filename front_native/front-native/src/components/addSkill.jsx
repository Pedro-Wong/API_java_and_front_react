import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { saveSkills } from "../services/skillServices";
import { useState } from "react";

export const AddSkill = () => {
  const [nome, setNome] = useState();
  const [url, setUrl] = useState();
  const [descricao, setDescricao] = useState();
  const [level, setLevel] = useState();

//   console.log("nome: ", nome);
//   console.log("url: ", url);
//   console.log("descricao: ", descricao);
//   console.log("level: ", level);

  const verificacao = () => {
    if (nome === "" || url === "" || descricao === "" || level === "") {
      Alert.alert("Atenção", "Nenhum campo pode ficar vazio", [
        { text: "Fechar", style: "cancel" },
      ]);
    } else if (
      nome === undefined ||
      url === undefined ||
      descricao === undefined ||
      level === undefined
    ) {
      Alert.alert("Atenção", "Nenhum campo pode ficar vazio", [
        { text: "Fechar", style: "cancel" },
      ]);
    } else {
      const objDados = {
        nome: nome,
        url: url,
        descricao: descricao,
        level: level,
      };
      console.log(objDados)
      const saveBD = async () => {
        const response = await saveSkills(objDados);
        setNome(" ");
        setUrl(" ");
        setLevel(" ");
        setDescricao(" ");
      };
      saveBD();
      Alert.alert("Sucesso!", "Habilidade cadastrada com sucesso", [
        { text: "Fechar", style: "cancel" },
      ]);
    }
  };

  return (
    <View style={style.containerModal}>
      <View style={style.header}>
        <Text style={style.text}>Adicionar habilidade</Text>
      </View>

      <View style={style.containerInput}>
        <TextInput
          style={style.input}
          placeholder="Nome da Skill"
          onChangeText={(e) => setNome(e)}
        />

        <TextInput
          style={style.input}
          placeholder="URL"
          onChangeText={(e) => setUrl(e)}
        />

        <TextInput
          style={style.input}
          placeholder="Versão"
          onChangeText={(e) => setLevel(e)}
        />

        <TextInput
          style={style.input}
          placeholder="Descrição"
          onChangeText={(e) => setDescricao(e)}
        />

        <TouchableOpacity style={style.buttons} onPress={() => verificacao()}>
          <Text style={style.textButton}>Adicionar Skill</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerModal: {
    flex: 0.9,
    justifyContent: "center",
    width: "95%",
    borderRadius: 15,
    paddingBottom: "5%",
  },
  header: {
    flex: 0.15,
    backgroundColor: "#0066cb",
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  input: {
    borderWidth: 2,
    height: "15%",
    width: "95%",
    borderRadius: 15,
    padding: 10,
  },
  containerInput: {
    paddingTop: "2%",
    paddingBottom: "2%",
    gap: 15,
    flex: 0.85,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  text: {
    color: "#f1f1f1",
    fontSize: 28,
    fontWeight: "500",
  },
  buttons: {
    borderWidth: 2,
    height: "12%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0066cb",
    borderRadius: 5,
  },
  textButton: {
    color: "#f1f1f1",
    fontSize: 19,
    fontWeight: "500",
  },
});
