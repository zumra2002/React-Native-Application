import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BottomNav from "@/components/BottomNav"; // ✅ Import BottomNav

export default function Account() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View
        style={{
          backgroundColor: "#22A519", // Ikman green
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
        <Icon name="settings-outline" size={22} color="#fff" />
      </View>

      {/* Content */}
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>
          Shehar Mavitha
        </Text>

        {[
          { icon: "pricetag-outline", label: "My Ads" },
          { icon: "storefront-outline", label: "My membership" },
          { icon: "star-outline", label: "Favorites" },
          { icon: "bookmark-outline", label: "Saved searches" },
          { icon: "call-outline", label: "Phone Numbers" },
          { icon: "person-outline", label: "My Profile" },
          { icon: "shield-checkmark-outline", label: "Stay safe" },
          { icon: "help-circle-outline", label: "FAQ" },
          { icon: "cash-outline", label: "How to sell fast?" },
          { icon: "ellipsis-horizontal", label: "More" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
            }}
          >
            <Icon
              name={item.icon}
              size={20}
              color="#555"
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 15 }}>{item.label}</Text>
          </TouchableOpacity>
        ))}

        {/* Logout */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
          }}
        >
          <Icon
            name="power-outline"
            size={20}
            color="#555"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 15 }}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* ✅ Bottom Navigation */}
      <BottomNav />
    </View>
  );
}
