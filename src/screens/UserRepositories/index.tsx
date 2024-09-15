// UserRepositories.tsx
import { View, Alert, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./style";
import { GoBackNavbar } from "../../components/GoBackNavbar";
import { Repository } from "./components/Repository";

type RouteParams = {
  userRepositories: {
    id: number;
    name: string;
    html_url: string;
    stargazers_count: number;
  }[];
};

export function UserRepositories() {
  const route = useRoute();
  const { userRepositories } = route.params as RouteParams;

  return (
    <>
      <GoBackNavbar />
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          {userRepositories && (
            <FlatList
              data={userRepositories}
              renderItem={({ item }) => <Repository repository={item} />}
              keyExtractor={(repository) => repository.id.toString()}
            />
          )}
        </View>
      </View>
    </>
  );
}
