import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

export const AddSkill = () => {
  return (
    <View style={style.containerModal}>
      <View style={style.header}>
        <Text>adicionar habilidade</Text>
      </View>

      <View style={style.containerInput}>
        <TextInput style={style.input} placeholder="Nome da Skill" />

        <TextInput style={style.input} placeholder="URL" />

        <TextInput style={style.input} placeholder="Versão" />

        <TextInput style={style.input} placeholder="Descrição" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerModal: {
    flex: 0.5,
    borderWidth: 2,
    width: "80%",
  },
  header: {
    flex: 0.15,
    backgroundColor: "#0066cb",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    height: 50,
  },
  containerInput: {
    gap: 15,
    flex: 0.85,
    backgroundColor: "green",
  },
});
