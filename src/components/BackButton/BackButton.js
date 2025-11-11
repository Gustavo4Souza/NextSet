import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BackButton({ 
  onPress, 
  style, 
  iconSize = 26, 
  iconColor = "#fff" 
}) {
  return (
    <TouchableOpacity 
      style={[styles.backButton, style]} 
      onPress={onPress}
    >
      <Ionicons name="arrow-back" size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    padding: 4,
  },
});
