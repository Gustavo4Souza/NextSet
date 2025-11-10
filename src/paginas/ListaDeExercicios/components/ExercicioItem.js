import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ExercicioItem({ nome, isSelecionado, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.exercicioItem,
        isSelecionado && styles.exercicioItemSelecionado,
      ]}
      onPress={onPress}
    >
      <View style={styles.iconCircle}>
        <Ionicons
          name={isSelecionado ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color="#8534FE"
        />
      </View>
      <Text style={styles.exercicioText}>{nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  exercicioItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#8534FE",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  exercicioItemSelecionado: {
    backgroundColor: "rgba(0, 166, 255, 0.1)",
    borderColor: "#8534FE",
  },
  iconCircle: {
    marginRight: 12,
  },
  exercicioText: {
    fontSize: 16,
    color: "#fff",
    flex: 1,
  },
});
