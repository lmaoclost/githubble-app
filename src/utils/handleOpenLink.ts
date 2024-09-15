import { Linking } from "react-native";

export const handleOpenLink = (url: string) => {
  Linking.openURL(url);
};