import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import GoalSelector from "../../components/GoalSelector/GoalSelector";
import FormInput from "../../components/FormInput/FormInput";
import BackButton from "../../components/BackButton/BackButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const handleSave = async () => {
  const profileData = {
    nickname,
    email,
    goal,
    expectation,
    weight,
    height,
    targetWeight,
    birthDate,
    projectStart,
    projectEnd,
    profileImage,
  };

  try {
    await AsyncStorage.setItem("profile", JSON.stringify(profileData));

    navigation.navigate("MainTabs", {
      screen: "Perfil",
      params: {
        screen: "PerfilMain",
        params: { profile: profileData },
      },
    });
  } catch (error) {
    console.log("Erro ao salvar perfil:", error);
  }
};

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
      <BackButton onPress={() => navigation.navigate("Registro")} style={styles.backButton} />

      <Text style={styles.title}>Editar Perfil</Text>
      <Text style={styles.subtitle}>Tenha uma conta ativa</Text>

      <ProfileHeader
        profileImage={profileImage}
        nickname={nickname}
        greeting="Olá,"
        onUploadPress={pickImage}
        showUploadButton={true}
      />

      <GoalSelector
        selectedGoal={goal}
        onSelectGoal={setGoal}
      />

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Apelido</Text>
        <FormInput
          value={nickname}
          onChangeText={setNickname}
          placeholder="Apelido"
        />
      </View>

      <View style={styles.rowInput}>
        <View style={[styles.inputGroup, styles.halfInput]}>
          <Text style={styles.inputLabel}>Peso (kg)</Text>
          <FormInput
            value={weight}
            onChangeText={setWeight}
            placeholder="Peso (kg)"
            keyboardType="numeric"
          />
        </View>

        <View style={[styles.inputGroup, styles.halfInput]}>
          <Text style={styles.inputLabel}>Altura (m)</Text>
          <FormInput
            value={height}
            onChangeText={setHeight}
            placeholder="Altura (m)"
            keyboardType="decimal-pad"
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Peso Alvo (kg)</Text>
        <FormInput
          value={targetWeight}
          onChangeText={setTargetWeight}
          placeholder="Peso Alvo (kg)"
          keyboardType="numeric"
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
          <FormInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            keyboardType="numbers-and-punctuation"
          />
        </View>
      ))}

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Email</Text>
        <FormInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
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
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
  },
  inputGroup: {
    marginTop: 10,
  },
  inputLabel: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 4,
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
