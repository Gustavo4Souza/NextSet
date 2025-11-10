import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function WeekHeader() {
  const today = new Date();
  const todayIndex = today.getDay();
  const daysOfWeekShort = ["dom", "seg.", "ter.", "qua.", "quin.", "sex.", "sab."];

  const getWeekDates = () => {
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - todayIndex);
    return Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date.getDate();
    });
  };

  const weekDates = getWeekDates();
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDaySelection = (index) => {
    if (selectedDays.includes(index)) {
      setSelectedDays(selectedDays.filter((day) => day !== index));
    } else {
      setSelectedDays([...selectedDays, index]);
    }
  };

  return (
    <View>
      <View style={styles.daysContainer}>
        {daysOfWeekShort.map((day, index) => {
          const isSelected = selectedDays.includes(index);
          return (
            <TouchableOpacity key={index} onPress={() => toggleDaySelection(index)}>
              {isSelected ? (
                <LinearGradient
                  colors={["#00a6ffff", "#d000ffff"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.selectedDayContainer}
                >
                  <Text style={[styles.dayText, styles.selectedDayText]}>{day}</Text>
                  <Text style={[styles.dayNumber, styles.selectedDayText]}>
                    {weekDates[index]}
                  </Text>
                </LinearGradient>
              ) : (
                <View style={styles.dayItem}>
                  <Text style={styles.dayText}>{day}</Text>
                  <Text style={styles.dayNumber}>{weekDates[index]}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 48,
    paddingHorizontal: 10,
  },
  dayItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 46,
    height: 46,
    borderRadius: 25,
  },
  dayText: {
    color: "#cfc7ff",
    fontSize: 12,
  },
  dayNumber: {
    color: "#cfc7ff",
    fontWeight: "700",
    fontSize: 14,
    marginTop: 4,
  },
  selectedDayContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 46,
    height: 46,
    borderRadius: 25,
  },
  selectedDayText: {
    color: "#fff",
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#3f3f3f",
    marginVertical: 12,
  },
});
