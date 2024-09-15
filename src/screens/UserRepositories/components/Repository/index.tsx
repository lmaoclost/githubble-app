import { View, Text, TouchableOpacity, Linking } from "react-native";
import { styles } from "./style";
import { Star } from 'lucide-react-native';

type props = {
  repository: {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
  };
};

export function Repository(props: props) {
  const { repository } = props;

  // Função para abrir o link do repositório
  const handleOpenRepository = () => {
    Linking.openURL(repository.html_url);
  };

  return (
    <View style={styles.repositoryContainer}>
      <View style={styles.repoContent}>
        <View style={styles.repoTextContainer}>
          <Text style={styles.repoName}>{repository.name}</Text>

          {repository.description && (
            <Text style={styles.repoDescription}>{repository.description}</Text>
          )}
        </View>

        <View style={styles.stargazersContainer}>
          <Star color="#FFD700" size={18} />
          <Text style={styles.stargazersCount}>{repository.stargazers_count}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.repoButton} onPress={handleOpenRepository}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}
