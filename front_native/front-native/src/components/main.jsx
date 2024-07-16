import {
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { CardSkill } from "./card";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export function MainScreen({ navigation }) {
  const [add, setAdd] = useState(false);

  // const exemplo = () => {

  //   for(let i ; i< 10, i++){

  //   }

  // }

  const modalAdd = () => {
    return (
      <Modal animationType="slide" transparent={false} visible={add}>
        <Text>Modal abriu Adicionar Skill</Text>
        <TouchableOpacity onPress={() => setAdd(false)}>
          <Text>Fechar modal de adicionar skill</Text>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <FontAwesome name="user-circle" size={100} color="black" />
        <Text style={{ color: "white", fontSize: 20 }}>Nome do Usuário</Text>
      </View>

      <View style={style.bodyMain}>
        {modalAdd()}
        <TouchableOpacity
          style={style.buttonAddSkill}
          onPress={() => setAdd(true)}
        >
          <Text>ADICIONAR SKILL</Text>
        </TouchableOpacity>
        <CardSkill />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0066cb",
    gap: 5,
  },
  bodyMain: {
    flex: 0.75,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonAddSkill: {
    borderWidth: 1,
    flex: 0.1,
    width: "50%",
    marginTop: "4%",
    justifyContent: "center",
    alignItems: "center",
  },
});
