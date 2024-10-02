import { useState } from "react";
import { Text, Image, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./style";
import { api } from "../../services/api";
import { GoBackNavbar } from "../../components/GoBackNavbar";
import { ImageModal } from "../../components/ImageModal"; // Importa o componente ImageModal
import { handleOpenLink } from "../../utils/handleOpenLink";

type RouteParams = {
  githubUser: {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    company: string;
    blog: string;
  };
};

export function User() {
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  const { githubUser } = route.params as RouteParams;

  async function handleGithubUserRepoView() {
    try {
      const response = await api.get(`/users/${githubUser.login}/repos`);
      navigation.navigate("userRepositories", { repositories: response.data });
    } catch (error) {
      Alert.alert("Ocorreu um problema, tente novamente");
    }
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            style={styles.profilePic}
            source={{ uri: githubUser.avatar_url }}
          />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{githubUser.name}</Text>
          <TouchableOpacity onPress={() => handleOpenLink(`http://github.com/${githubUser.login}`)}>
            <Text style={styles.link}>@{githubUser.login}</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{githubUser.bio}</Text>
          <Text style={styles.text}>Empresa: {githubUser.company}</Text>
          <TouchableOpacity onPress={() => handleOpenLink(githubUser.blog)}>
            <Text style={styles.link}>{githubUser.blog}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleGithubUserRepoView}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Ver repositórios</Text>
        </TouchableOpacity>

        <ImageModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          imageUrl={githubUser.avatar_url}
        />
      </View>
    </>
  );
}
