import { Text, View, TouchableOpacity, Modal } from "react-native";
import { StyleSheet } from "react-native";
import { EditSkill } from "./editSkill";
import { useState } from "react";
export const CardSkill = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const modalEdit = () => {
    return (
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={false}
        
      >
        <Text>Modal abriu</Text>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text>Fechar modal</Text>
        </TouchableOpacity>
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

        <TouchableOpacity
          style={style.buttons}
          onPress={() => setModalVisible(true)}
        >
          <Text>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttons}>
          <Text>Excluir</Text>
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
    borderWidth: 1,
    width: "40%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    width: "70%",
    height: "50%"
  }
});
