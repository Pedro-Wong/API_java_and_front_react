import React from "react";
import {
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export function About() {
  return (
    <View style={style.style1}>
      <View style={style.style2}>
        <FontAwesome5 name="user-graduate" size={100} color="black" />
        <Text style={{ fontSize: 22, color: "white" }}>
          Pedro Henrique de Azevedo
        </Text>
      </View>
      <View style={style.style3}>
        <Text style={{ fontSize: 25 }}>Sobre mim:</Text>
        <View style={style.style5}>
          <Text>
            Estou migrando de área e atualmente busco minha primeira experiência
            na área de tecnologia
          </Text>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Meu link do git hub:{" "}
            </Text>
            <Text>https://github.com/Pedro-Wong </Text>
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Meu link do linkedin:
            </Text>
            <Text>https://www.linkedin.com/in/pedro-azevedo-92646717a/</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  style1: {
    flex: 1,
    backgroundColor: "#0066cb",
  },
  style2: {
    flex: 0.3,

    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  style3: {
    flex: 0.7,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  style4: {
    borderWidth: 2,
    width: "40%",
    height: "60%",
  },
  style5: {
    backgroundColor: "#fff",
    borderWidth: 2,
    flex: 0.5,
    width: "90%",
    gap: 20,
    padding: 10,
  },
});
