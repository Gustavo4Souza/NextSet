import { View, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import WeekHeader from "../../components/WeekHeader/WeekHeader";
import TreinoButton from "../../components/TreinoButton/TreinoButton";

const STORAGE_KEY = '@nextset:treinos_personalizados';

export default function Treinos({ navigation, route }) {
  const [treinosPersonalizados, setTreinosPersonalizados] = useState([]);

  // Carrega os treinos salvos ao montar o componente
  useEffect(() => {
    carregarTreinos();
  }, []);

  // Escuta novos treinos via navegação
  useEffect(() => {
    if (route.params?.novoTreino) {
      const { novoTreino } = route.params;
      adicionarTreino(novoTreino);
      // Limpa os parâmetros após adicionar
      navigation.setParams({ novoTreino: undefined });
    }
  }, [route.params?.novoTreino]);

  const carregarTreinos = async () => {
    try {
      const treinosSalvos = await AsyncStorage.getItem(STORAGE_KEY);
      if (treinosSalvos !== null) {
        const treinos = JSON.parse(treinosSalvos);
        console.log('Treinos carregados:', treinos);
        setTreinosPersonalizados(treinos);
      }
    } catch (error) {
      console.error('Erro ao carregar treinos:', error);
    }
  };

  const adicionarTreino = async (novoTreino) => {
    try {
      // Carrega a lista atual do AsyncStorage para garantir que temos a versão mais recente
      const treinosSalvos = await AsyncStorage.getItem(STORAGE_KEY);
      const treinosAtuais = treinosSalvos ? JSON.parse(treinosSalvos) : [];
      
      // Adiciona o novo treino
      const novaLista = [...treinosAtuais, novoTreino];
      
      // Salva no AsyncStorage
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista));
      
      // Atualiza o estado
      setTreinosPersonalizados(novaLista);
      
      console.log('Treino adicionado. Total:', novaLista.length);
      console.log('Lista completa:', novaLista.map(t => t.nome));
    } catch (error) {
      console.error('Erro ao adicionar treino:', error);
    }
  };

  return (
    <View style={styles.container}>
      <WeekHeader />
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
      <TreinoButton
        letra="A"
        texto="Peitoral, Triceps e ombro"
        onPress={() => navigation.navigate("Treino", { 
          treino: { 
            nome: "Treino A - Peitoral, Triceps e ombro",
            exercicios: [
              { nome: "Supino Reto" },
              { nome: "Supino Inclinado" },
              { nome: "Desenvolvimento" },
              { nome: "Paralelas" }
            ]
          } 
        })}
      />

      <TreinoButton
        letra="B"
        texto="Costas, Biceps e Abdomen"
        onPress={() => navigation.navigate("Treino", { 
          treino: { 
            nome: "Treino B - Costas, Biceps e Abdomen",
            exercicios: [
              { nome: "Puxada Frontal" },
              { nome: "Remada Curvada" },
              { nome: "Rosca Direta" },
              { nome: "Rosca Martelo" }
            ]
          } 
        })}
      />

      <TreinoButton
        letra="C"
        texto="Perna"
        onPress={() => navigation.navigate("Treino", { 
          treino: { 
            nome: "Treino C - Perna",
            exercicios: [
              { nome: "Agachamento" },
              { nome: "Leg Press" },
              { nome: "Cadeira Extensora" },
              { nome: "Mesa Flexora" }
            ]
          } 
        })}
      />

      {/* Treinos Personalizados */}
      {treinosPersonalizados.map((treino, index) => (
        <TreinoButton
          key={`personalizado-${index}-${Date.now()}`}
          letra="P"
          texto={treino.nome}
          onPress={() => navigation.navigate("Treino", { treino })}
        />
      ))}

      <TreinoButton
        isAdd={true}
        texto="Crie o seu treino"
        onPress={() => navigation.navigate("ListaDeExercicios")}
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
