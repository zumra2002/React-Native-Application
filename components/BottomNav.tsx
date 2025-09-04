import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/app/index";

export default function BottomNav() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Home */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Home")}>
        <Icon name="home" size={24} color="#808080" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      {/* Search */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Category")}>
        <Icon name="search" size={24} color="#808080" />
        <Text style={styles.label}>Search</Text>
      </TouchableOpacity>

      {/* Post Ad */}
      <View style={styles.postAdWrapper}>
        <TouchableOpacity
          style={styles.postAdOuter}
          onPress={() => navigation.navigate("Postadd")}
        >
          <View style={styles.postAdInner}>
            <Icon name="add" size={30} color="#FFC107" /> 
          </View>
        </TouchableOpacity>
        <Text style={styles.postAdLabel}>Post ad</Text>
      </View>

      {/* Chat */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Chat")}>
        <Icon name="chatbubble" size={24} color="#808080" />
        <Text style={styles.label}>Chat</Text>
      </TouchableOpacity>

      {/* Account */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Account")}>
        <Icon name="person" size={24} color="#808080" />
        <Text style={styles.label}>Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  iconContainer: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 2,
    color: "#808080", // grey text for all except Post Ad
  },
  postAdWrapper: {
    alignItems: "center",
    marginTop: -30, 
  },
  postAdOuter: {
    backgroundColor: "#FFC107", // Yellow outer circle
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  postAdInner: {
    backgroundColor: "#5D4037", // Brown inner circle
    borderRadius: 40,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  postAdLabel: {
    fontSize: 12,
    marginTop: 6,
    color: "#000",
  },
});
