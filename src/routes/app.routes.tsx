import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { User } from "../screens/User";
import { UserRepositories } from "../screens/UserRepositories";
import { GoBackNavbar } from "../components/GoBackNavbar";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen
        name="user"
        component={User}
        options={{
          headerShown: true,
          header: () => <GoBackNavbar />
        }}
      />
      <Screen
        name="userRepositories"
        component={UserRepositories}
        options={{
          headerShown: true,
          header: () => <GoBackNavbar />
        }}
      />
    </Navigator>
  );
}
