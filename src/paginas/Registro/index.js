import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import FormInput from "../../components/FormInput/FormInput";
import BackButton from "../../components/BackButton/BackButton";
import logo from "../../../src/assets/logo.png";

export default function Registro({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log({ username, email, password, confirmPassword });
    navigation.navigate('Relatorio');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <BackButton onPress={() => navigation.goBack()} style={styles.backButton} />

        <View style={styles.header}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Crie uma conta</Text>
          <Text style={styles.subtitle}>Ajude-nos a terminar de configurar sua conta</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Usuário:</Text>
            <FormInput
              value={username}
              onChangeText={setUsername}
              placeholder="Usuário"
              icon="person-outline"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email:</Text>
            <FormInput
              value={email}
              onChangeText={setEmail}
              placeholder="Coloque o seu email"
              icon="mail-outline"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha:</Text>
            <FormInput
              value={password}
              onChangeText={setPassword}
              placeholder="Coloque a sua senha"
              icon="lock-closed-outline"
              secureTextEntry={true}
              showPasswordToggle={true}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirmar senha:</Text>
            <FormInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirme a sua senha"
              icon="lock-closed-outline"
              secureTextEntry={true}
              showPasswordToggle={true}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleRegister} activeOpacity={0.9}>
          <LinearGradient
            colors={["#00a6ffff", "#d000ffff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonSolid}
          >
            <Text style={styles.buttonText}>Registrar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 80,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 4,
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 6,
    marginLeft: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  buttonSolid: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
