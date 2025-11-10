import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function TreinoButton({ letra, texto, onPress, isAdd = false }) {
  return (
    <View style={styles.treinoCard}>
      <LinearGradient
        colors={["#00a6ff", "#8534FE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBorder}
      >
        <TouchableOpacity style={styles.treinoContent} onPress={onPress}>
          <View style={styles.letraContainer}>
            {isAdd ? (
              <Ionicons name="add" size={32} color="#fff" />
            ) : (
              <Text style={styles.letraText}>{letra}</Text>
            )}
          </View>
          <Text style={styles.treinoText}>{texto}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  treinoCard: {
    marginTop: 20,
  },
  gradientBorder: {
    padding: 2,
    borderRadius: 50,
  },
  treinoContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 48,
    backgroundColor: "#000",
  },
  letraContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  letraText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  treinoText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    flex: 1,
  },
});
