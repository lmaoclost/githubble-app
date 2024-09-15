import { useState } from "react";
import { Text, Image, View, TouchableOpacity, Alert, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./style";
import { api } from "../../services/api";
import { GoBackNavbar } from "../../components/GoBackNavbar";
import { X } from 'lucide-react-native';

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
      navigation.navigate("userRepositories", { userRepositories: response.data });
    } catch (error) {
      Alert.alert("Ocorreu um problema, tente novamente");
    }
  }

  return (
    <>
      <GoBackNavbar />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            style={styles.profilePic}
            source={{ uri: githubUser.avatar_url }}
          />
        </TouchableOpacity>
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

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <X size={24} color="white" />
                  </TouchableOpacity>
                  <Image
                    style={styles.modalImage}
                    source={{ uri: githubUser.avatar_url }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </>
  );
}
