import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FormInput({
  value,
  onChangeText,
  placeholder,
  icon,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  style,
  iconColor = "#aaa",
  showPasswordToggle = false,
  placeholderTextColor = "#aaa",
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View style={[styles.container, style]}>
      {icon && (
        <Ionicons name={icon} size={20} color={iconColor} style={styles.icon} />
      )}
      <TextInput
        style={[styles.input, showPasswordToggle && styles.inputWithToggle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
      {showPasswordToggle && (
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={handleTogglePassword}
        >
          <Ionicons
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={22}
            color={iconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1c1e",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 12,
    fontSize: 15,
  },
  inputWithToggle: {
    paddingRight: 40,
  },
  eyeButton: {
    position: "absolute",
    right: 12,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
});
