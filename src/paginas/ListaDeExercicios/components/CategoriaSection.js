import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ExercicioItem from "./ExercicioItem";

export default function CategoriaSection({ 
  titulo, 
  exercicios, 
  exerciciosSelecionados, 
  onToggleExercicio 
}) {
  return (
    <View style={styles.treinoSection}>
      <Text style={styles.treinoTitle}>{titulo}</Text>
      {exercicios.map((exercicio, index) => (
        <ExercicioItem
          key={index}
          nome={exercicio}
          isSelecionado={exerciciosSelecionados.includes(exercicio)}
          onPress={() => onToggleExercicio(exercicio)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  treinoSection: {
    marginTop: 24,
    marginBottom: 16,
  },
  treinoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
});
