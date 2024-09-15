import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectName: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  text: {
    color: "#fff",
  },
  input: {
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
