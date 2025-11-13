import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import GradientButton from "../../components/GradientButton/GradientButton";
import CategoriaSection from "./components/CategoriaSection";
import { exerciciosPorCategoria, categorias } from "../../data/exercicios";

export default function ListaDeExercicios({ navigation }) {
  const [exerciciosSelecionados, setExerciciosSelecionados] = useState([]);

  const toggleExercicio = (nome) => {
    setExerciciosSelecionados((prev) => {
      if (prev.includes(nome)) {
        return prev.filter((ex) => ex !== nome);
      } else {
        return [...prev, nome];
      }
    });
  };

  const handleCriarTreino = () => {
    if (exerciciosSelecionados.length > 0) {
      const dataHora = new Date();
      const nomeTreino = `Treino Personalizado ${dataHora.toLocaleDateString('pt-BR')} ${dataHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
      
      navigation?.navigate("TreinosMain", {
        novoTreino: {
          nome: nomeTreino,
          exercicios: exerciciosSelecionados,
        },
      });
      
      setExerciciosSelecionados([]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Modelo A, B e C</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {categorias.map((categoria) => (
          <CategoriaSection
            key={categoria.key}
            titulo={categoria.titulo}
            exercicios={exerciciosPorCategoria[categoria.key]}
            exerciciosSelecionados={exerciciosSelecionados}
            onToggleExercicio={toggleExercicio}
          />
        ))}

        <GradientButton
          text={`Criar Treino (${exerciciosSelecionados.length} selecionados)`}
          onPress={handleCriarTreino}
          style={styles.buttonWrapper}
          disabled={exerciciosSelecionados.length === 0}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#000",
  },
  backButton: {
    padding: 4,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  buttonWrapper: {
    width: "100%",
    marginBottom: 24,
    marginTop: 12,
  },
});
