import { useState } from "react";
import React from "react";
import { View, StyleSheet } from "react-native";
import WeekHeader from "../../components/WeekHeader/WeekHeader";
import { Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {

    const [progress, setProgress] = useState(0.17); // 17%

    return (
        <View style={styles.container}>
            <WeekHeader />
            {/* Título + plano */}
            <View style={styles.Wrapper}>
                <View style={styles.label}>
                    <Text style={styles.title}>Progresso</Text>
                    <Text style={styles.plan}>Plan: 0/32</Text>
                </View>

                {/* Barra de Progresso com gradiente */}
                <View style={styles.progressBar}>
                    <LinearGradient
                        colors={["#00a6ff", "#d000ff"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[styles.progressFill, { width: `${progress * 100}%` }]}
                    />
                </View>
                <Text style={styles.percentText}>{Math.round(progress * 100)}%</Text>
            </View>

            {/* Logo central */}
            <View style={styles.logoContainer}>
                <Image
                    source={require("../../assets/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    Wrapper: {
        width: '90%',
        alignSelf: 'center',
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
    logoContainer: {
        alignItems: "center",
    },
    logo: {
        width: 160,
    },
});

