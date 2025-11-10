import React from "react";
import { View, StyleSheet } from "react-native";
import WeekHeader from "../../components/WeekHeader/WeekHeader";

export default function Home() {
    return (
        <View style={styles.container}>
            <WeekHeader />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
});
