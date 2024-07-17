import { Text, View, TouchableOpacity, Modal } from "react-native";
import { StyleSheet } from "react-native";
import { EditSkill } from "./editSkill";
import { useState } from "react";

export const CardSkill = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // modal para editar a Skill
  const modalEdit = () => {
    return (
      <Modal visible={modalVisible} animationType="slide" transparent={false}>
        <View style={style.modal}>
          {/* import do componente EditSkil, onde está os input para editar a Skill */}
          <EditSkill />
          <View style={style.containerButtonsModal}>
            <TouchableOpacity
              style={style.buttonClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={style.text}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text>Nome da tecnologia</Text>
      </View>
      <View style={style.image}>
        <Text>Imagem</Text>
      </View>
      <View style={style.description}>
        <Text>Descrição</Text>
      </View>

      <View style={style.buttonsContainer}>
        {modalEdit()}
        {/* Botão para abrir o modal que está na função modalEdit */}
        <TouchableOpacity
          style={style.buttons}
          onPress={() => setModalVisible(true)}
        >
          <Text style={style.text}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttons}>
          <Text style={style.text}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 2,
    flex: 0.8,
    width: "80%",
    marginBottom: "10%",
  },
  header: {
    borderWidth: 1,
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderWidth: 1,
    flex: 0.5,
  },
  description: {
    borderWidth: 1,
    flex: 0.2,
  },
  buttonsContainer: {
    borderWidth: 1,
    flex: 0.15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttons: {
    orderWidth: 2,
    height: "50%",
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0066cb",
    borderRadius: 5,
  },
  containerButtonsModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 20,
    height: "15%",
    width: "100%",
  },
  modal: {
    flex: 1,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#f1f1f1",
    fontWeight: "500",
    fontSize: 16,
  },
  buttonClose: {
    orderWidth: 2,
    height: "40%",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 5,
  },
});
