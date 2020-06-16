import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  titleTextCreate: {
    fontSize: 21,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
  },
  input: {
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 25,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    width: width / 1.5,
    height: height / 14,
    padding: 3,
  },
  textStyle: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
  },
  buttons: {
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#64b4cc",
    borderRadius: 10,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    width: width / 2,
    height: height / 15,
  },
});
