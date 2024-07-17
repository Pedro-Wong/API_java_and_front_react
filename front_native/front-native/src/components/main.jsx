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
import { AddSkill } from "./addSkill";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export function MainScreen({ navigation }) {
  const [add, setAdd] = useState(false);

  // const exemplo = () => {

  //   for(let i ; i< 10, i++){

  //   }

  // }

  
  // modal para adicionar a Skill
  const modalAdd = () => {
    return (
      <View
        style={{
          display: "flex ",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Modal de adicionar */}
        <Modal animationType="fade" transparent={false} visible={add}>
          <View style={style.modal}>
            {/* import do componente AddSkil, onde está os input para adicionar a Skill */}
            <AddSkill />
            <View style={style.containerButtons}>
              <TouchableOpacity
                style={style.buttons}
                onPress={() => setAdd(false)}
              >
                <Text style={style.text}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <FontAwesome name="user-circle" size={100} color="black" />
        <Text style={{ color: "white", fontSize: 20 }}>Nome do Usuário</Text>
      </View>

      {/* Botão para abrir o modal que está na função modalAdd */}
      <View style={style.bodyMain}>
        {modalAdd()}
        <TouchableOpacity
          style={style.buttonAddSkill}
          onPress={() => setAdd(true)}
        >
          <Text>ADICIONAR SKILL</Text>
        </TouchableOpacity>
        {/* import do componente que mostra o card das skill */}
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
  modal: {
    flex: 1,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },

  containerButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 20,
    height: "15%",
    width: "100%",
  },
  buttons: {
    borderWidth: 2,
    height: "40%",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 5,
  },
  text: {
    color: "#f1f1f1",
    fontWeight: "500",
    fontSize: 16,
  },
});
