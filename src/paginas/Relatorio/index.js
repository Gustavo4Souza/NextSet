import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Dimensions, 
  Image, 
  Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function EditProfile({ navigation }) {
  const [goal, setGoal] = useState("");
  const [expectation, setExpectation] = useState("rápido");
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [projectStart, setProjectStart] = useState("");
  const [projectEnd, setProjectEnd] = useState("");
  const [email, setEmail] = useState("");

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permissão necessária", "Precisamos do acesso à galeria!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    navigation.navigate("MainTabs", { screen: "Home" });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Config")}>
        <Ionicons name="arrow-back" size={26} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Editar Perfil</Text>
      <Text style={styles.subtitle}>Tenha uma conta ativa</Text>

      <View style={styles.profileRow}>
        <LinearGradient
          colors={["#00a6ffff", "#d000ffff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientCircle}
        >
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Ionicons name="person" size={70} color="#fff" />
          )}
        </LinearGradient>

        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.name}>{nickname || "Usuário"}</Text>

          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            <LinearGradient
              colors={["#00a6ffff", "#d000ffff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientUpload}
            >
              <Text style={styles.uploadText}>Upload de uma foto</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.label}>Qual é o seu Objetivo?</Text>
      <View style={styles.goalsContainer}>
        {["Emagrecer", "Condição Física", "Ganho de Massa Muscular"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.goalButton, goal === item && styles.goalButtonSelected]}
            onPress={() => setGoal(item)}
          >
            <LinearGradient
              colors={
                goal === item ? ["#00a6ffff", "#d000ffff"] : ["transparent", "transparent"]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.goalGradient}
            >
              <Text style={[styles.goalText, goal === item && styles.goalTextSelected]}>
                {item}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Apelido</Text>
        <TextInput
          style={styles.input}
          placeholder="Apelido"
          placeholderTextColor="#aaa"
          value={nickname}
          onChangeText={setNickname}
        />
      </View>

      <View style={styles.rowInput}>
        <View style={[styles.inputGroup, styles.halfInput]}>
          <Text style={styles.inputLabel}>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
        </View>

        <View style={[styles.inputGroup, styles.halfInput]}>
          <Text style={styles.inputLabel}>Altura (m)</Text>
          <TextInput
            style={styles.input}
            placeholder="Altura (m)"
            placeholderTextColor="#aaa"
            keyboardType="decimal-pad"
            value={height}
            onChangeText={setHeight}
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Peso Alvo (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Peso Alvo (kg)"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={targetWeight}
          onChangeText={setTargetWeight}
        />
      </View>

      <Text style={styles.label}>Expectativa:</Text>
      <View style={styles.expectationContainer}>
        <TouchableOpacity style={styles.expectationButton} onPress={() => setExpectation("rápido")}>
          <Ionicons
            name={expectation === "rápido" ? "radio-button-on" : "radio-button-off"}
            size={20}
            color={expectation === "rápido" ? "#00a6ffff" : "#aaa"}
          />
          <Text style={styles.expectationText}>Resultado rápido</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.expectationButton} onPress={() => setExpectation("lento")}>
          <Ionicons
            name={expectation === "lento" ? "radio-button-on" : "radio-button-off"}
            size={20}
            color={expectation === "lento" ? "#d000ffff" : "#aaa"}
          />
          <Text style={styles.expectationText}>Resultado lento</Text>
        </TouchableOpacity>
      </View>

      {[ 
        { label: "Data de nascimento", placeholder: "dd/MM/yyyy", value: birthDate, setValue: setBirthDate },
        { label: "Início do projeto", placeholder: "dd/MM/yyyy", value: projectStart, setValue: setProjectStart },
        { label: "Fim do projeto", placeholder: "dd/MM/yyyy", value: projectEnd, setValue: setProjectEnd },
      ].map(({ label, placeholder, value, setValue }) => (
        <View key={label} style={styles.inputGroup}>
          <Text style={styles.inputLabel}>{label}</Text>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#aaa"
            keyboardType="numbers-and-punctuation"
            value={value}
            onChangeText={setValue}
          />
        </View>
      ))}

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <LinearGradient
          colors={["#00a6ffff", "#d000ffff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.saveText}>Salvar informações</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 45,
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 20,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  gradientCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 45,
  },
  textContainer: {
    marginLeft: 15,
  },
  greeting: {
    color: "#aaa",
    fontSize: 16,
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  uploadButton: {
    marginTop: 8,
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "flex-start",
  },
  gradientUpload: {
    paddingVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  uploadText: {
    color: "#fff",
    fontWeight: "600",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
  },
  goalsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 10,
  },
  goalButton: {
    borderColor: "#00a6ffff",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  goalGradient: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  goalButtonSelected: {
    borderColor: "transparent",
  },
  goalText: {
    color: "#00a6ffff",
  },
  goalTextSelected: {
    color: "#fff",
    fontWeight: "600",
  },
  inputGroup: {
    marginTop: 10,
  },
  inputLabel: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#1f1f1f",
    color: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
  },
  rowInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
  },
  expectationContainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 10,
    marginTop: 5,
  },
  expectationButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  expectationText: {
    color: "#fff",
  },
  saveButton: {
    marginTop: 30,
    borderRadius: 10,
    overflow: "hidden",
  },
  gradient: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
