import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import logo from "../../../assets/logo.png";

export default function Registro({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleContinue = () => {
    console.log({ username, email, password, confirmPassword });
    navigation.navigate('BiodataScreen'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>     
      
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      
    <Image 
      source={logo} 
      style={{ width: 120, height: 120, marginBottom: 1 }} 
      resizeMode="contain" 
    />

      <Text style={styles.title}>Crie uma conta</Text>
      <Text style={styles.subtitle}>Ajude-nos a terminar de configurar sua conta</Text>

      <View style={styles.progressContainer}>
        <View style={[styles.step, styles.activeStep]}>
          <Ionicons name="information-circle" size={16} color="#fff" />
          <Text style={styles.stepText}>Informações da Conta</Text>
        </View>
        <View style={[styles.step, styles.inactiveStep]}>
          <Ionicons name="person-circle" size={16} color="#aaa" />
          <Text style={styles.stepTextInactive}>Informações pessoais</Text>
        </View>
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
        <View style={styles.progressEmpty} />
      </View>

      <View style={styles.form}>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            placeholderTextColor="#aaa"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Coloque o seu email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Coloque a sua senha"
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye" : "eye-off"} size={20} color="#aaa" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirme a sua senha"
            placeholderTextColor="#aaa"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons name={showConfirmPassword ? "eye" : "eye-off"} size={20} color="#aaa" />
          </TouchableOpacity>
        </View>

 <TouchableOpacity onPress={handleContinue} style={{ marginTop: 250 }}>
  <View style={[styles.button, styles.buttonSolid]}>
    <Text style={styles.buttonText}>Continue</Text>
  </View>
</TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6a5acd',
    marginBottom: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 25,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 12,
  },
  stepTextInactive: {
    color: '#aaa',
    marginLeft: 5,
    fontSize: 12,
  },
  activeStep: {
    opacity: 1,
  },
  inactiveStep: {
    opacity: 0.6,
  },
  progressBar: {
    flexDirection: 'row',
    height: 3,
    width: '100%',
    backgroundColor: '#222',
    borderRadius: 3,
    marginBottom: 20,
  },
  progressFill: {
    flex: 1,
    backgroundColor: '#4facfe',
  },
  progressEmpty: {
    flex: 1,
    backgroundColor: '#222',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
    paddingVertical: 12,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonSolid: {
    backgroundColor: '#4facfe',
  },
});