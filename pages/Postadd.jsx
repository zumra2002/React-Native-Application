// Postadd.jsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BottomNav from "@/components/BottomNav"; // ✅ Import BottomNav

export default function Postadd() {
  const categories = [
    { name: "Cars", icon: "car-outline", color: "#4CAF50" },
    { name: "Motorbikes", icon: "bicycle-outline", color: "#E91E63" },
    { name: "Mobile Phones", icon: "phone-portrait-outline", color: "#2196F3" },
    { name: "Property", icon: "home-outline", color: "#FF5722" },
    { name: "Home & Garden", icon: "flower-outline", color: "#009688" },
    { name: "Jobs", icon: "briefcase-outline", color: "#3F51B5" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Post an ad</Text>
        </View>

        {/* Welcome */}
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeText}>Welcome Shehar Mavitha!</Text>
          <Text style={styles.subText}>Choose an option below to post an ad</Text>
        </View>

        {/* Categories Grid */}
        <View style={styles.grid}>
          {categories.map((item, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Icon name={item.icon} size={30} color={item.color} />
              <Text style={styles.cardText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Extra Options */}
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Sell in other categories</Text>
          <Icon name="chevron-forward-outline" size={20} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Look for something</Text>
          <Icon name="chevron-down-outline" size={20} color="#555" />
        </TouchableOpacity>

        {/* Bottom Links */}
        <View style={styles.bottomLinks}>
          <Text style={styles.link}>Posting allowance</Text>
          <Text style={styles.dot}> | </Text>
          <Text style={styles.link}>Posting rules</Text>
        </View>
      </ScrollView>

      {/* ✅ Bottom Navigation */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#009688",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  welcomeBox: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: "#555",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  card: {
    width: "30%",
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 2,
  },
  cardText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    marginHorizontal: 15,
    marginTop: 10,
    padding: 12,
    borderRadius: 6,
  },
  optionText: {
    fontSize: 15,
    color: "#333",
  },
  bottomLinks: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  link: {
    color: "#2196F3",
    fontSize: 14,
  },
  dot: {
    marginHorizontal: 5,
    color: "#999",
  },
});
