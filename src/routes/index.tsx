import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#131016' }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  )
}