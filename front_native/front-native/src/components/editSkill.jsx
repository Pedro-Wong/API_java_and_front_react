import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

export const EditSkill = () => {
  return (
    <View style={style.containerModal}>
      <View style={style.header}>
        <Text style={style.text}>Editar habilidade</Text>
      </View>

      <View style={style.containerInput}>
        <TextInput style={style.input} placeholder="Nome da Skill" />

        <TextInput style={style.input} placeholder="URL" />

        <TextInput style={style.input} placeholder="Versão" />

        <TextInput style={style.input} placeholder="Descrição" />
        <TouchableOpacity style={style.buttons}>
          <Text style={style.textButton}>Editar Skill</Text>
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
    fontSize: 20,
    fontWeight: "500",
  },
});
