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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    width: '90%',
    height: '80%',
    backgroundColor: '#1F1E25',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
  },
  modalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    zIndex: 1,
  },
});
