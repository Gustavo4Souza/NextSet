import { useState } from "react";
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import WeekHeader from "../../components/WeekHeader/WeekHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

export default function Home() {
    const [progress, setProgress] = useState(0.17); // 17%

    return (
        <View style={styles.container}>
            <WeekHeader />
            
            <ProgressBar 
                progress={progress}
                title="Progresso"
                plan="Plan: 0/32"
                showPercentage={true}
            />

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
    logoContainer: {
        alignItems: "center",
    },
    logo: {
        width: 160,
    },
});

