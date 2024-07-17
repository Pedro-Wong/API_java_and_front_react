import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { salveUser } from "../services/userServices";
import AntDesign from "@expo/vector-icons/AntDesign";

export function SignUp({ navigation }) {
  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();
  const [verSenha, setVerSenha] = useState();
  const [showSenha, setShowSenha] = useState(false);

  console.log(showSenha);
  const verificacao = () => {
    if (
      usuario === undefined ||
      senha === undefined ||
      verSenha === undefined
    ) {
      Alert.alert("Atenção", "Nenhum campo pode ficar vazio", [
        {
          text: "Fechar",
          style: "cancel",
        },
      ]);
    } else if (usuario === "" || senha === " " || verSenha === "") {
      Alert.alert("Atenção", "Nenhum campo pode ficar vazio", [
        {
          text: "Fechar",
          style: "cancel",
        },
      ]);
    } else if (senha !== verSenha) {
      Alert.alert("Atenção", "As senhas não são iguais", [
        {
          text: "Fechar",
          style: "cancel",
        },
      ]);
    } else {
      const objData = {
        login: usuario,
        senha: senha,
      };
      console.log(objData)
      const postApi = async () => {
        const response = await salveUser(objData);
      };

      postApi();
    }
  };

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
          <TextInput
            style={style.style5}
            placeholder="Digite o usuário"
            onChangeText={(e) => setUsuario(e)}
          />

          <TextInput
            style={style.style5}
            placeholder="Digite a senha"
            onChangeText={(e) => setSenha(e)}
            secureTextEntry={!showSenha}
          ></TextInput>

          <TextInput
            style={style.style5}
            placeholder="Confirme a senha"
            onChangeText={(e) => setVerSenha(e)}
            secureTextEntry={!showSenha}
          />
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text style={{ fontWeight: "600" }}>Mostrar senha</Text>
            <TouchableOpacity onPress={() => setShowSenha(!showSenha)}>
              <AntDesign
                name="eye"
                size={35}
                color="black"
                
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={style.style7} onPress={() => verificacao()}>
            <Text style={style.style6}>CADASTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text>Voltar</Text>
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
    display: "flex",
    justifyContent: "flex-end",
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
