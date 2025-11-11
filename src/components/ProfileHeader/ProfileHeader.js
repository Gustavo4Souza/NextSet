import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileHeader({
  profileImage,
  nickname = "Usuário",
  greeting,
  plan,
  onUploadPress,
  showUploadButton = false,
}) {
  return (
    <View style={styles.profileContainer}>
      <LinearGradient
        colors={["#00a6ffff", "#d000ffff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientCircle}
      >
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Ionicons name="person" size={60} color="#fff" />
        )}
      </LinearGradient>

      <View style={styles.textContainer}>
        {greeting && <Text style={styles.greeting}>{greeting}</Text>}
        <Text style={styles.name}>{nickname}</Text>
        {plan && <Text style={styles.plan}>{plan}</Text>}

        {showUploadButton && onUploadPress && (
          <TouchableOpacity style={styles.uploadButton} onPress={onUploadPress}>
            <LinearGradient
              colors={["#00a6ffff", "#d000ffff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientUpload}
            >
              <Text style={styles.uploadText}>Upload de uma foto</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  gradientCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  textContainer: {
    marginLeft: 12,
  },
  greeting: {
    color: "#aaa",
    fontSize: 16,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  plan: {
    color: "#aaa",
    fontSize: 13,
  },
  uploadButton: {
    marginTop: 8,
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "flex-start",
  },
  gradientUpload: {
    paddingVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  uploadText: {
    color: "#fff",
    fontWeight: "600",
  },
});
