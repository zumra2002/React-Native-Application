import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BottomNav from "@/components/BottomNav";

export default function Account() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View
        style={{
          backgroundColor: "#0a9d58", // Header green
          paddingVertical: 15,
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Account
        </Text>
        <Icon name="settings" size={22} color="#fff" /> {/* Filled settings icon */}
      </View>

      {/* Grey Box with Name */}
      <View
        style={{
          backgroundColor: "#f0f0f0", // Grey box
          padding: 15,
          margin: 10,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000", marginBottom: 10 }}>
          Shehar Mavitha
        </Text>

        {/* Account Options in the Grey Box */}
        {[
          { icon: "pricetag", label: "My Ads" },
          { icon: "storefront", label: "My membership" },
          { icon: "star", label: "Favorites" },
          { icon: "bookmark", label: "Saved searches" },
          { icon: "call", label: "Phone Numbers" },
          { icon: "person", label: "My Profile" },
          { icon: "shield-checkmark", label: "Stay safe" },
          { icon: "help-circle", label: "FAQ" },
          { icon: "cash", label: "How to sell fast?" },
          { icon: "ellipsis-horizontal", label: "More" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 12,
              borderBottomWidth: index !== 9 ? 1 : 0, // No border for last item
              borderBottomColor: "#ccc",
            }}
          >
            <Icon
              name={item.icon}
              size={20}
              color="#808080" // Grey icon
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 15, color: "#000" }}>{item.label}</Text> {/* Black text */}
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 12,
          paddingHorizontal: 15,
        }}
      >
        <Icon
          name="power"
          size={20}
          color="#000" // Black logout icon
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 15, color: "#000" }}>Log out</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}
