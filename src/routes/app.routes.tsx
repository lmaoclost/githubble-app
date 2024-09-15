import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { User } from "../screens/User";
import { UserRepositories } from "../screens/UserRepositories";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="user" component={User} />
      <Screen name="userRepositories" component={UserRepositories} />
    </Navigator>
  );
}
