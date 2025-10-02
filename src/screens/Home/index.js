import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Inicio from "./components/Inicio";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Inicio />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});