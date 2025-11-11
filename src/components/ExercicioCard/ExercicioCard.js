import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function ExercicioCard({
  exercicio,
  index,
  dataAtual,
  onToggleConcluido,
  onUpdateCarga,
  onUpdateReps,
}) {
  return (
    <LinearGradient
      colors={["#000", "#00a6ff", "#8534FE"]}
      start={{ x: 0.50, y: -2 }}
      end={{ x: 1.10, y: -1 }}
      style={styles.exercicioCard}
    >
      <Text style={styles.dataText}>{dataAtual}</Text>

      <View style={styles.exercicioContent}>
        <TouchableOpacity
          onPress={() => onToggleConcluido(index)}
          style={styles.checkbox}
        >
          <View
            style={[
              styles.checkboxBox,
              exercicio.concluido && styles.checkboxChecked,
            ]}
          >
            {exercicio.concluido && (
              <Ionicons name="checkmark" size={16} color="#000" />
            )}
          </View>
        </TouchableOpacity>

        <View style={styles.exercicioInfo}>
          <Text
            style={[
              styles.exercicioNome,
              exercicio.concluido && styles.exercicioConcluidoText,
            ]}
          >
            {exercicio.nome}
          </Text>
          <View style={styles.detalhesRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Carga:</Text>
              <TextInput
                style={styles.input}
                value={exercicio.carga}
                onChangeText={(valor) => onUpdateCarga(index, valor)}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#aaa"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Reps:</Text>
              <TextInput
                style={styles.input}
                value={exercicio.reps}
                onChangeText={(valor) => onUpdateReps(index, valor)}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#aaa"
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  exercicioCard: {
    borderRadius: 25,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#00d4ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  dataText: {
    fontSize: 12,
    color: "#e0e0e0",
    marginBottom: 12,
  },
  exercicioContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  checkbox: {
    marginRight: 12,
    marginTop: 2,
  },
  checkboxBox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "#fff",
  },
  exercicioInfo: {
    flex: 1,
  },
  exercicioNome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  exercicioConcluidoText: {
    textDecorationLine: "line-through",
    opacity: 0.6,
  },
  detalhesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 20,
    color: "#fff",
    marginRight: 8,
  },
  input: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 20,
    color: "#fff",
    minWidth: 60,
  },
});
