import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/app/index";

export default function BottomNav() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute();

  const getColor = (tabName: keyof RootStackParamList) => {
    return route.name === tabName ? "#0a9d58" : "#808080"; // green for active, grey for inactive
  };

  const getLabelStyle = (tabName: keyof RootStackParamList) => {
    return {
      fontSize: 12,
      marginTop: 2,
      color: route.name === tabName ? "#0a9d58" : "#808080",
    };
  };

  return (
    <View style={styles.container}>
      {/* Home */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Home")}>
        <Icon name="home" size={24} color={getColor("Home")} />
        <Text style={getLabelStyle("Home")}>Home</Text>
      </TouchableOpacity>

      {/* Search */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Category")}>
        <Icon name="search" size={24} color={getColor("Category")} />
        <Text style={getLabelStyle("Category")}>Search</Text>
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
        <Icon name="chatbubble" size={24} color={getColor("Chat")} />
        <Text style={getLabelStyle("Chat")}>Chat</Text>
      </TouchableOpacity>

      {/* Account */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Account")}>
        <Icon name="person" size={24} color={getColor("Account")} />
        <Text style={getLabelStyle("Account")}>Account</Text>
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
  postAdWrapper: {
    alignItems: "center",
    marginTop: -30, 
  },
  postAdOuter: {
    backgroundColor: "#FFC107",
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
    backgroundColor: "#5D4037",
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
