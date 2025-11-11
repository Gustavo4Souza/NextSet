import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function GoalSelector({ 
  goals = ["Emagrecer", "Condição Física", "Ganho de Massa Muscular"],
  selectedGoal,
  onSelectGoal,
  label = "Qual é o seu Objetivo?",
  style
}) {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.goalsContainer}>
        {goals.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.goalButton,
              selectedGoal === item && styles.goalButtonSelected,
            ]}
            onPress={() => onSelectGoal(item)}
          >
            <LinearGradient
              colors={
                selectedGoal === item
                  ? ["#00a6ffff", "#d000ffff"]
                  : ["transparent", "transparent"]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.goalGradient}
            >
              <Text
                style={[
                  styles.goalText,
                  selectedGoal === item && styles.goalTextSelected,
                ]}
              >
                {item}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
  },
  goalsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 10,
  },
  goalButton: {
    borderColor: "#00a6ffff",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  goalGradient: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  goalButtonSelected: {
    borderColor: "transparent",
  },
  goalText: {
    color: "#00a6ffff",
  },
  goalTextSelected: {
    color: "#fff",
    fontWeight: "600",
  },
});
