import { Text, Image, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./style";
import { api } from "../../services/api";
import { GoBackNavbar } from "../../components/GoBackNavbar";

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
  const route = useRoute();
  const navigation = useNavigation();

  const { githubUser } = route.params as RouteParams;

  async function handleGithubUserRepoView() {
    try {
      const response = await api.get(`/users/${githubUser.login}/repos`);
      navigation.navigate("userRepositories", { userRepositories: response.data });
    } catch (error) {
      Alert.alert("Ocorreu um problema, tente novamente");
    }
  }

  return (
    <>
      <GoBackNavbar />
      <View style={styles.container}>
        <Image
          style={styles.profilePic}
          source={{ uri: githubUser.avatar_url }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{githubUser.name}</Text>
          <Text style={styles.text}>@{githubUser.login}</Text>
          <Text style={styles.text}>{githubUser.bio}</Text>
          <Text style={styles.text}>Empresa: {githubUser.company}</Text>
          <TouchableOpacity>
            <Text style={styles.link}>{githubUser.blog}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleGithubUserRepoView}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Ver repositórios</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
