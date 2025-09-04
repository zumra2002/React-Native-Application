import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import BottomNav from "@/components/BottomNav";

export default function Chat() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Chats</Text>
      </View>

      {/* Top White Area with Image and Buttons */}
      <View style={styles.topWhiteArea}>
        <Image
          source={require("../assets/images/no-chat.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>No conversations yet!</Text>
        <Text style={styles.subtitle}>
          Click "Chat" on an ad or post your own ad to start chatting.
        </Text>

        <TouchableOpacity style={styles.browseButton}>
          <Text style={styles.browseButtonText}>Browse ads</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Post an ad!</Text>
        </TouchableOpacity>
      </View>

      {/* Full Grey Box Below Buttons */}
      <View style={styles.greyBox} />

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0a9d58",
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  topWhiteArea: {
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  browseButton: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#555",
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  browseButtonText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold",
  },
  postButton: {
    width: "100%",
    backgroundColor: "#FFD600",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  postButtonText: {
    color: "#555",
    fontSize: 14,
    fontWeight: "bold",
  },
  greyBox: {
    flex: 1, // Fills remaining space
    backgroundColor: "#e0e0e0",
  },
});
