import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CalendarHeader({ 
  currentMonth,
  onPreviousMonth,
  onNextMonth,
  monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPreviousMonth}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.monthYear}>
        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
      </Text>

      <TouchableOpacity onPress={onNextMonth}>
        <Ionicons name="chevron-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  monthYear: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
