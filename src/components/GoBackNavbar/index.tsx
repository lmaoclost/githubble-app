import { View, TouchableOpacity, Text } from "react-native";
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

export function GoBackNavbar() {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={handleNavigateBack} style={styles.button}>
        <ArrowLeft color="white" size={24} />
      </TouchableOpacity>

      <Text style={styles.title}>Githubble App</Text>

      <View style={{ width: 24 }} />
    </View>
  );
}
