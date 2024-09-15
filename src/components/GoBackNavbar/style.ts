// style.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#31CF67",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  button: {
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
