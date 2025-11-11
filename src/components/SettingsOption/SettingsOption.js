import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsOption({ 
  icon, 
  label, 
  onPress,
  iconSize = 20,
  gradientColors = ["#00a6ffff", "#d000ffff"]
}) {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.iconContainer}
      >
        <Ionicons name={icon} size={iconSize} color="#fff" />
      </LinearGradient>
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 10,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
  },
});
