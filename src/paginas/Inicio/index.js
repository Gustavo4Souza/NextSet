import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import logo from "../../../src/assets/logo.png";

const { width, height } = Dimensions.get("window");

class Inicio extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>

        <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
          <LinearGradient
            colors={["#00a6ffff", "#d000ffff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Vamos começar!</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    marginTop: height * 0.1,
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: width * 0.6,
    height: height * 0.25,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.9,
    marginBottom: height * 0.05,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Inicio;
