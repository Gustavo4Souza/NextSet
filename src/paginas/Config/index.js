import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import SettingsOption from "../../components/SettingsOption/SettingsOption";
import BackButton from "../../components/BackButton/BackButton";

export default function Settings({ route, navigation }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const savedData = await AsyncStorage.getItem("profile");
        if (savedData) setProfile(JSON.parse(savedData));
      } catch (error) {
        console.log("Erro ao carregar perfil:", error);
      }
    };
    loadProfile();
  }, []);

  useEffect(() => {
    if (route.params?.profile) {
      setProfile(route.params.profile);
      AsyncStorage.setItem("profile", JSON.stringify(route.params.profile));
    }
  }, [route.params]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.reset({
        index: 0,
        routes: [{ name: "Inicio" }],
      });
    } catch (error) {
      console.log("Erro ao sair:", error);
    }
  };

  const settingsOptions = [
    { icon: "lock-closed", label: "Senha" },
    { icon: "help-circle", label: "Ajuda" },
    { icon: "notifications", label: "Notificações" },
    { icon: "chatbubbles", label: "Feedback" },
    { icon: "bug", label: "Reportar erro" },
  ];

  return (
    <ScrollView style={styles.container}>
      <BackButton 
        onPress={() => navigation.navigate("Treinos")}
        style={styles.backButton}
      />

      <Text style={styles.title}>Configurações</Text>

      <ProfileHeader
        profileImage={profile?.profileImage}
        nickname={profile?.nickname}
        plan="Plano: TP 1+"
      />

      <View style={styles.infoBox}>
        {profile?.goal && (
          <>
            <Text style={styles.infoLabel}>Objetivo</Text>
            <Text style={styles.infoText}>{profile.goal}</Text>
          </>
        )}

        {profile?.weight && (
          <>
            <Text style={styles.infoLabel}>Peso</Text>
            <Text style={styles.infoText}>{profile.weight} kg</Text>
          </>
        )}

        {profile?.height && (
          <>
            <Text style={styles.infoLabel}>Altura</Text>
            <Text style={styles.infoText}>{profile.height} m</Text>
          </>
        )}

        {profile?.targetWeight && (
          <>
            <Text style={styles.infoLabel}>Peso Alvo</Text>
            <Text style={styles.infoText}>{profile.targetWeight} kg</Text>
          </>
        )}

        {profile?.birthDate && (
          <>
            <Text style={styles.infoLabel}>Data de nascimento</Text>
            <Text style={styles.infoText}>{profile.birthDate}</Text>
          </>
        )}

        {profile?.projectStart && (
          <>
            <Text style={styles.infoLabel}>Início do projeto</Text>
            <Text style={styles.infoText}>{profile.projectStart}</Text>
          </>
        )}

        {profile?.projectEnd && (
          <>
            <Text style={styles.infoLabel}>Fim do projeto</Text>
            <Text style={styles.infoText}>{profile.projectEnd}</Text>
          </>
        )}

        {profile?.expectation && (
          <>
            <Text style={styles.infoLabel}>Expectativa</Text>
            <Text style={styles.infoText}>
              {profile.expectation === "rápido" ? "Resultado rápido" : "Resultado lento"}
            </Text>
          </>
        )}

        {profile?.email && (
          <>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoText}>{profile.email}</Text>
          </>
        )}
      </View>

      {settingsOptions.map((item, i) => (
        <SettingsOption
          key={i}
          icon={item.icon}
          label={item.label}
          onPress={() => {}}
        />
      ))}

      <SettingsOption
        icon="exit"
        label="Sair do aplicativo"
        onPress={handleLogout}
        gradientColors={["#ff3b3b", "#b30000"]}
      />

      <Text style={styles.version}>Versão 1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  backButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  infoBox: {
    backgroundColor: "#1a1a1a",
    borderRadius: 14,
    padding: 15,
    marginBottom: 25,
  },
  infoLabel: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 10,
  },
  infoText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  version: {
    color: "#666",
    fontSize: 13,
    textAlign: "center",
    marginTop: 15,
  },
});
