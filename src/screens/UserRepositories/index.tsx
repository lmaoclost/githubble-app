// UserRepositories.tsx
import { View, Alert, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./style";
import { GoBackNavbar } from "../../components/GoBackNavbar";
import { Repository } from "./components/Repository";

type RouteParams = {
  repositories: {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
  }[];
};

export function UserRepositories() {
  const route = useRoute();
  const { repositories } = route.params as RouteParams;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          {repositories && (
            <FlatList
              data={repositories}
              renderItem={({ item }) => <Repository repository={item} />}
              keyExtractor={(repository) => repository.id.toString()}
            />
          )}
        </View>
      </View>
    </>
  );
}
