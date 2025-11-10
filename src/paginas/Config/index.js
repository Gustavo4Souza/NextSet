import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

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

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Treinos")}
      >
        <Ionicons name="arrow-back" size={26} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Configurações</Text>

      <View style={styles.profileContainer}>
        <LinearGradient
          colors={["#00a6ffff", "#d000ffff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientCircle}
        >
          {profile?.profileImage ? (
            <Image source={{ uri: profile.profileImage }} style={styles.profileImage} />
          ) : (
            <Ionicons name="person" size={60} color="#fff" />
          )}
        </LinearGradient>

        <View style={{ marginLeft: 12 }}>
          <Text style={styles.name}>{profile?.nickname || "Usuário"}</Text>
          <Text style={styles.plan}>Plano: TP 1+</Text>
        </View>
      </View>

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

      {[
        { icon: "lock-closed", label: "Senha" },
        { icon: "help-circle", label: "Ajuda" },
        { icon: "notifications", label: "Notificações" },
        { icon: "chatbubbles", label: "Feedback" },
        { icon: "bug", label: "Reportar erro" },
      ].map((item, i) => (
        <TouchableOpacity key={i} style={styles.option}>
          <LinearGradient
            colors={["#00a6ffff", "#d000ffff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconContainer}
          >
            <Ionicons name={item.icon} size={20} color="#fff" />
          </LinearGradient>
          <Text style={styles.optionText}>{item.label}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LinearGradient
          colors={["#ff3b3b", "#b30000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.logoutGradient}
        >
          <Ionicons name="exit" size={20} color="#fff" />
          <Text style={styles.logoutText}>Sair do aplicativo</Text>
        </LinearGradient>
      </TouchableOpacity>

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
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 20,
  },
  gradientCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  plan: {
    color: "#aaa",
    fontSize: 13,
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
  option: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 10,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 20,
    borderRadius: 12,
    overflow: "hidden",
  },
  logoutGradient: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 12,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  version: {
    color: "#666",
    fontSize: 13,
    textAlign: "center",
    marginTop: 15,
  },
});
