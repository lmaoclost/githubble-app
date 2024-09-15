import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    width: 150,
    height: 150,
    borderStyle: "solid",
    borderColor: "blue",
    borderWidth: 5,
    borderRadius: 75,
    marginBottom: 20,
  },
  infoContainer: {
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  text: {
    color: "#fff",
  },
  link: {
    color: "#31CF67",
  },
  button: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 15,
  },
});
