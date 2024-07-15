import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function SignUp({ navigation }) {
  return (
    <View style={style.style1}>
      <View style={{ width: "100%", flex: 0.15, justifyContent: "center" }}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 35,
            fontWeight: "bold",
            color: "#f1f1f1",
          }}
        >
          Cadastro
        </Text>
      </View>

      <View style={style.style2}>

        <View style={style.style3}>
          <Text
            style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}
          >
            Digite seus dados para cadastro
          </Text>
          <TextInput style={style.style5} placeholder="Digite o usuário" />

          <TextInput style={style.style5} placeholder="Digite a senha" />
          <TextInput style={style.style5} placeholder="Confirme a senha" />

          <TouchableOpacity style={style.style7}>
            <Text style={style.style6}>CADASTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text>
                Voltar
            </Text>
          </TouchableOpacity>
         
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  style1: {
    flex: 1,
    backgroundColor: "#0066cb",
    width: "100%",
    justifyContent: "center",
  },
  style2: {
    flex: 0.85,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 8,
  },
  style3: {
    width: "90%",
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    rowGap: 10,
  },
  style4: {
    borderRadius: 4,
    width: "50%",
    height: "25%",
    backgroundColor: "white",
  },
  style5: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 0.6,
    height: "15%",
    borderRadius: 10,
    padding: 8,
  },
  style6: {
    alignSelf: "center",
    color: "white",
  },
  style7: {
    width: "100%",
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    height: "12%",
    borderRadius: 10,
    backgroundColor: "#0066cb",
  },
  style8: {
    fontSize: 20,
  },
});
