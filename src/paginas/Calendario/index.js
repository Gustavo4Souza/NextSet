import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WeekHeader from "../../components/WeekHeader/WeekHeader";
import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";


export default function Calendario({ navigation }) {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDates, setSelectedDates] = useState([]);

    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        return { firstDay, daysInMonth };
    };

    const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);

    const previousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const toggleDate = (day) => {
        if (selectedDates.includes(day)) {
            setSelectedDates(selectedDates.filter(d => d !== day));
        } else {
            setSelectedDates([...selectedDates, day]);
        }
    };

    const renderCalendar = () => {
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<View key={`empty-${i}`} style={styles.dayCell} />);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected = selectedDates.includes(day);
            days.push(
                <TouchableOpacity
                    key={day}
                    style={styles.dayCell}
                    onPress={() => toggleDate(day)}
                >
                    {isSelected ? (
                        <LinearGradient
                            colors={["#00a6ffff", "#d000ffff"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.selectedDay}
                        >
                            <Text style={styles.selectedDayText}>{day}</Text>
                        </LinearGradient>
                    ) : (
                        <Text style={styles.dayText}>{day}</Text>
                    )}
                </TouchableOpacity>
            );
        }

        return days;
    };

    return (
        <View style={styles.container}>
            <WeekHeader />

            <View style={styles.calendarContainer}>
                <CalendarHeader
                    currentMonth={currentMonth}
                    onPreviousMonth={previousMonth}
                    onNextMonth={nextMonth}
                />

                <View style={styles.weekDays}>
                    {daysOfWeek.map((day, index) => (
                        <Text key={index} style={styles.weekDayText}>{day}</Text>
                    ))}
                </View>

                <View style={styles.daysGrid}>
                    {renderCalendar()}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    calendarContainer: {
        margin: 20,
        marginTop: 60,
    },
    weekDays: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    weekDayText: {
        color: "#666",
        fontSize: 14,
        width: 40,
        textAlign: "center",
    },
    daysGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    dayCell: {
        width: "14.28%", // 100% / 7 days
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
    },
    dayText: {
        color: "#fff",
        fontSize: 16,
    },
    selectedDay: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
    },
    selectedDayText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
