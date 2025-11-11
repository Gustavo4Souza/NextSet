import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  Dimensions, 
  Alert, 
  ActivityIndicator } from "react-native";
import GradientButton from "../../components/GradientButton/GradientButton";
import FormInput from "../../components/FormInput/FormInput";
import logo from "../../../src/assets/logo.png";
import logoApple from "../../../src/assets/logo_apple.png";
import logoGoogle from "../../../src/assets/Logo_Google.png";

const { width, height } = Dimensions.get("window");

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  const handleLogin = () => {
    navigation.navigate("MainTabs", { screen: "Home" });
  };

  const handleForgotPassword = () => {
    Alert.alert("Forgot password", "Implementar recuperação de senha.");
  };

  const handleSignUp = () => {
    navigation.navigate("Registro");
  };

  const handleGoogleLogin = async () => {
    try {
      setLoadingGoogle(true);
      setTimeout(() => {
        setLoadingGoogle(false);
        Alert.alert("Google Login", "Simulação concluída — usuário logado (mock).");
        navigation.navigate("MainTabs", { screen: "Home" });
      }, 1000);
    } catch (err) {
      setLoadingGoogle(false);
      Alert.alert("Erro", "Falha no login com Google.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logoImage} resizeMode="contain" />
      <Text style={styles.title}>Faça login com sua conta</Text>

      <FormInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <FormInput
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry={true}
        showPasswordToggle={true}
        style={styles.input}
      />

      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotButton}>
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <GradientButton 
        text="Login"
        onPress={handleLogin}
        style={styles.loginButtonWrapper}
      />

      <Text style={styles.signUpText}>
        Não tem uma conta?{" "}
        <Text onPress={handleSignUp} style={styles.signUpLink}>
          Cadastre-se
        </Text>
      </Text>

      <Text style={[styles.altText, { marginTop: 60 }]}>Ou faça login com</Text>

      <TouchableOpacity
        style={[styles.altButton, { marginBottom: 12 }]}
        onPress={() => Alert.alert("Apple", "Apple Login placeholder")}
      >
        <Image source={logoApple} style={styles.altLogo} resizeMode="contain" />
        <Text style={styles.altButtonText}>APPLE ID</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.altButton}
        onPress={handleGoogleLogin}
        disabled={loadingGoogle}
      >
        {loadingGoogle ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <Image source={logoGoogle} style={styles.altLogo} resizeMode="contain" />
            <Text style={styles.altButtonText}>GOOGLE</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: height * 0.08,
    paddingHorizontal: 20,
  },
  logoImage: {
    width: 200,
    height: 200,
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 22,
  },
  input: {
    width: width * 0.9,
  },
  forgotButton: {
    width: width * 0.9,
    alignItems: "flex-start",
    marginBottom: 18,
  },
  forgotText: {
    color: "#5ce1e6",
  },
  loginButtonWrapper: {
    width: width * 0.9,
    marginBottom: 14,
  },
  signUpText: {
    color: "#fff",
    marginBottom: 18,
  },
  signUpLink: {
    color: "#5ce1e6",
    fontWeight: "600",
  },
  altText: {
    color: "#aaa",
    marginBottom: 12,
  },
  altButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#555",
    borderWidth: 1,
    width: width * 0.9,
    paddingVertical: 12,
    borderRadius: 8,
  },
  altLogo: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  altButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
});