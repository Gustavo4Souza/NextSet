import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton/BackButton";
import ExercicioCard from "../../components/ExercicioCard/ExercicioCard";

export default function Treino({ navigation, route }) {

  const exerciciosPadrao = [
    { nome: "Supino Reto", carga: "0", reps: "0", concluido: false },
    { nome: "Supino Inclinado", carga: "0", reps: "0", concluido: false },
    { nome: "Desenvolvimento", carga: "0", reps: "0", concluido: false },
    { nome: "Paralelas", carga: "0", reps: "0", concluido: false },
  ];

  const [exercicios, setExercicios] = useState(exerciciosPadrao);
  const [nomeTreino, setNomeTreino] = useState("Treino A");

  useEffect(() => {
    if (route?.params?.treino) {
      const { nome, exercicios: exerciciosTreino } = route.params.treino;
      
      if (nome) {
        setNomeTreino(nome);
      }
      
      if (exerciciosTreino && exerciciosTreino.length > 0) {
        const exerciciosFormatados = exerciciosTreino.map((ex) => ({
          nome: ex.nome || ex,
          carga: "0",
          reps: "0",
          concluido: false,
        }));
        setExercicios(exerciciosFormatados);
      }
    }
  }, [route?.params?.treino]);

  const getDataAtual = () => {
    const meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = meses[hoje.getMonth()];
    const ano = hoje.getFullYear();
    return `${mes} ${dia}, ${ano}`;
  };

  const toggleConcluido = (index) => {
    setExercicios((prev) =>
      prev.map((ex, i) =>
        i === index ? { ...ex, concluido: !ex.concluido } : ex
      )
    );
  };

  const updateCarga = (index, valor) => {
    setExercicios((prev) =>
      prev.map((ex, i) =>
        i === index ? { ...ex, carga: valor } : ex
      )
    );
  };

  const updateReps = (index, valor) => {
    setExercicios((prev) =>
      prev.map((ex, i) =>
        i === index ? { ...ex, reps: valor } : ex
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <View style={styles.header}>
        <BackButton 
          onPress={() => navigation?.goBack()}
          iconSize={28}
          style={styles.backButton}
        />
        <Text style={styles.headerTitle}>{nomeTreino}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {exercicios.map((ex, index) => (
          <ExercicioCard
            key={index}
            exercicio={ex}
            index={index}
            dataAtual={getDataAtual()}
            onToggleConcluido={toggleConcluido}
            onUpdateCarga={updateCarga}
            onUpdateReps={updateReps}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    textAlign: "center",
    marginRight: 36,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});
