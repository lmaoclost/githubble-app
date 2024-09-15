import { useState } from "react";
import { Alert, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { api } from "../../services/api";

export function Home() {
  const [githubUser, setGithubUser] = useState("");
  const navigation = useNavigation();

  async function handleGithubUserSearch() {
    if (githubUser.length === 0) {
      alert("Campo de pesquisa deve ser preenchido.");
      return;
    }

    try {
      const response = await api.get(`/users/${githubUser}`);
      navigation.navigate("user", { githubUser: response.data });
    } catch (error) {
      Alert.alert("Ocorreu um problema, tente novamente");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.projectName}>Githubble</Text>
      <Text style={styles.title}>Digite seu usuário do Github</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do usuário"
          placeholderTextColor="#6B6B6B"
          onChangeText={setGithubUser}
          value={githubUser}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleGithubUserSearch}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
