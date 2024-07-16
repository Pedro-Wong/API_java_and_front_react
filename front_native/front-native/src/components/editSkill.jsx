import { View, Text, Modal } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";


export const EditSkill = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // const modalEdit = () => {

  //   return (

  //   );
  // };

  return (
    <TouchableOpacity >
      
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {console.log(modalVisible)}
        <Text>Modal abriu</Text>
      </Modal>
    </TouchableOpacity>
  );
};
