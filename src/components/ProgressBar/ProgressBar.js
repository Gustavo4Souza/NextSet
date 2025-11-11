import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ProgressBar({
  progress = 0,
  title = "Progresso",
  plan,
  showPercentage = true,
  style,
}) {
  const percentage = Math.round(progress * 100);

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.label}>
        <Text style={styles.title}>{title}</Text>
        {plan && <Text style={styles.plan}>{plan}</Text>}
      </View>

      <View style={styles.progressBar}>
        <LinearGradient
          colors={["#00a6ff", "#d000ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.progressFill, { width: `${percentage}%` }]}
        />
      </View>

      {showPercentage && (
        <Text style={styles.percentText}>{percentage}%</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "90%",
    alignSelf: "center",
  },
  label: {
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
});
