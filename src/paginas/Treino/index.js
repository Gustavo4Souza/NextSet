import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Treino({ navigation, route }) {
  // Exercícios padrão caso não sejam passados via navegação
  const exerciciosPadrao = [
    { nome: "Supino Reto", carga: "0", reps: "0", concluido: false },
    { nome: "Supino Inclinado", carga: "0", reps: "0", concluido: false },
    { nome: "Desenvolvimento", carga: "0", reps: "0", concluido: false },
    { nome: "Paralelas", carga: "0", reps: "0", concluido: false },
  ];

  const [exercicios, setExercicios] = useState(exerciciosPadrao);
  const [nomeTreino, setNomeTreino] = useState("Treino A");

  // Recebe os exercícios passados pela navegação
  useEffect(() => {
    if (route?.params?.treino) {
      const { nome, exercicios: exerciciosTreino } = route.params.treino;
      
      if (nome) {
        setNomeTreino(nome);
      }
      
      if (exerciciosTreino && exerciciosTreino.length > 0) {
        // Formata os exercícios recebidos com os campos necessários
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

  // Função para obter a data atual formatada
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
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{nomeTreino}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {exercicios.map((ex, index) => (
          <LinearGradient
            key={index}
            colors={["#000", "#00a6ff", "#8534FE"]}
            start={{ x: 0.50 ,y: -2 }}  
            end={{ x: 1.10, y: -1 }}
            style={styles.exercicioCard}
          >
            <Text style={styles.dataText}>{getDataAtual()}</Text>

            <View style={styles.exercicioContent}>
              <TouchableOpacity
                onPress={() => toggleConcluido(index)}
                style={styles.checkbox}
              >
                <View
                  style={[
                    styles.checkboxBox,
                    ex.concluido && styles.checkboxChecked,
                  ]}
                >
                  {ex.concluido && (
                    <Ionicons name="checkmark" size={16} color="#000" />
                  )}
                </View>
              </TouchableOpacity>

              <View style={styles.exercicioInfo}>
                <Text
                  style={[
                    styles.exercicioNome,
                    ex.concluido && styles.exercicioConcluidoText,
                  ]}
                >
                  {ex.nome}
                </Text>
                <View style={styles.detalhesRow}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Carga:</Text>
                    <TextInput
                      style={styles.input}
                      value={ex.carga}
                      onChangeText={(valor) => updateCarga(index, valor)}
                      keyboardType="numeric"
                      placeholder="0"
                      placeholderTextColor="#aaa"
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Reps:</Text>
                    <TextInput
                      style={styles.input}
                      value={ex.reps}
                      onChangeText={(valor) => updateReps(index, valor)}
                      keyboardType="numeric"
                      placeholder="0"
                      placeholderTextColor="#aaa"
                    />
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
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
    padding: 4,
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
  detalheText: {
    fontSize: 14,
    color: "#fff",
  },
});
