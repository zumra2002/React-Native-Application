import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/app/index";

export default function BottomNav() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        backgroundColor: "#fff",
      }}
    >
      {/* Home */}
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Home")} // 👈 Home screen
      >
        <Icon name="home-outline" size={24} />
        <Text>Home</Text>
      </TouchableOpacity>

      {/* Search → Category page */}
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Category")} // 👈 now goes to Category
      >
        <Icon name="search-outline" size={24} />
        <Text>Search</Text>
      </TouchableOpacity>

      {/* Add / Post Ad */}
      <TouchableOpacity
        style={{
          backgroundColor: "orange",
          borderRadius: 40,
          padding: 12,
          marginTop: -20,
        }}
        onPress={() => navigation.navigate("Postadd")}
      >
        <Icon name="add" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Chat */}
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Chat")}
      >
        <Icon name="chatbubble-outline" size={24} />
        <Text>Chat</Text>
      </TouchableOpacity>

      {/* Account */}
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Account")}
      >
        <Icon name="person-outline" size={24} />
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
}
