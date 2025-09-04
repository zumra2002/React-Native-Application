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

      {/* Full Grey Box Area */}
      <View style={styles.fullGreyBox}>
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
  fullGreyBox: {
    flex: 1,
    backgroundColor: "#e0e0e0", // Full grey background
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
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
    backgroundColor: "#fff",
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
  },
  postButtonText: {
    color: "brown",
    fontSize: 14,
    fontWeight: "bold",
  },
});
