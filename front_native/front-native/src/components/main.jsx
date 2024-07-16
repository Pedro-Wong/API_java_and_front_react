import {
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { CardSkill } from "./card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export function MainScreen() {
  // const exemplo = () => {

  //   for(let i ; i< 10, i++){

  //   }

  // }

  return (
    <View style={style.style1}>
      <View style={style.style2}>
        <FontAwesome name="user-circle" size={100} color="black" />
        <Text style={{ color: "white", fontSize: 20 }}>Nome do Usuário</Text>
      </View>

      <View style={style.style4}>
        {/* <Text>Funcionalidades</Text>
        <TouchableOpacity style={style.style5}>
          <View>
            <FontAwesome name="user" size={40} color="black" />
          </View>
          <View>
            <Text>Perfil</Text>
            <Text>Dados Cadastrais</Text>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity style={style.style3}>
          <Text>ADICIONAR SKILL</Text>
        </TouchableOpacity>
        <CardSkill/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  style1: {
    flex: 1,
  },
  style2: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0066cb",
    gap: 5,
  },
  style3:{
    borderWidth:1,
    flex: 0.1,
    width: "50%",
    marginTop: "4%",
    justifyContent: "center",
    alignItems:"center"
  },
  style4: {
    flex: 0.75,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // style5: {
  //   borderRadius: 12,
  //   width: "40%",
  //   height: "30%",
  //   marginBottom: 10,
  //   marginTop: 5,
  //   justifyContent: "space-evenly",
  //   paddingLeft: 15,
  //   paddingBottom: 10,
  //   backgroundColor: "#fff",
  // },
  // style6: {},
});
