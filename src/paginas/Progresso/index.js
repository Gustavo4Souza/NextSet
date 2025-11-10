import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WeekHeader from "../../components/WeekHeader/WeekHeader";

export default function Progresso() {
  const [progress, setProgress] = useState(0.17); // 17%

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho de semana */}
      <WeekHeader />

      {/* Título + plano */}
      <View style={styles.header}>
        <Text style={styles.title}>Progresso</Text>
        <Text style={styles.plan}>Plan: 0/32</Text>
      </View>

      {/* Barra de Progresso com gradiente */}
      <View style={styles.progressBar}>
        <LinearGradient
          colors={["#00a6ff", "#d000ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.progressFill, { width: `${progress * 100}%` }]}
        />
      </View>
      <Text style={styles.percentText}>{Math.round(progress * 100)}%</Text>

      {/* Logo central */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>NextSet</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  plan: {
    color: "#aaa",
    fontSize: 14,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#222",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 5,
  },
  percentText: {
    color: "#00a6ff",
    marginTop: 8,
    fontSize: 13,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoText: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "700",
    background: "transparent",
    color: "#d000ff",
  },
});
