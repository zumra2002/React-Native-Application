import BottomNav from "@/components/BottomNav";
import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ListRenderItem,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Define the shape of each category item
type CategoryItem = {
  id: string;
  name: string;
  icon: ImageSourcePropType;
};

const categories: CategoryItem[] = [
  { id: "1", name: "Mobiles", icon: require("../assets/images/mobile.png") },
  { id: "2", name: "Electronics", icon: require("../assets/images/electronics.png") },
  { id: "3", name: "Vehicles", icon: require("../assets/images/vehicles.png") },
  { id: "4", name: "Property", icon: require("../assets/images/property.png") },
  { id: "5", name: "Home & Garden", icon: require("../assets/images/garden.png") },
  { id: "6", name: "Animals", icon: require("../assets/images/animals.png") },
  { id: "7", name: "Services", icon: require("../assets/images/service.png") },
  { id: "8", name: "Business & Industry", icon: require("../assets/images/industry.png") },
  { id: "9", name: "Jobs", icon: require("../assets/images/jobs.png") },
  { id: "10", name: "Hobby, Sport & Kids", icon: require("../assets/images/sports.png") },
  { id: "11", name: "Fashion & Beauty", icon: require("../assets/images/fashion.png") },
  { id: "12", name: "Essentials", icon: require("../assets/images/essential.png") },
  { id: "13", name: "Education", icon: require("../assets/images/education.png") },
  { id: "14", name: "Agriculture", icon: require("../assets/images/agriculture.png") },
  { id: "15", name: "Work Overseas", icon: require("../assets/images/work.png") },
  { id: "16", name: "Other", icon: require("../assets/images/other.png") },
];

export default function Category() {
  const renderCategory: ListRenderItem<CategoryItem> = ({ item }) => (
    <TouchableOpacity
      onPress={() => console.log("Pressed", item.name)}
      style={{
        flex: 1,
        margin: 6,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: "#eee",
      }}
    >
      <Image
        source={item.icon}
        style={{ width: 40, height: 40 }}
        resizeMode="contain"
      />
      <Text style={{ marginTop: 6, textAlign: "center", fontSize: 12 }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header with search */}
      <View
        style={{
          backgroundColor: "#0a9d58", // Ikman.lk green
          paddingHorizontal: 16,
          paddingTop: 35,
          paddingBottom: 20,
        }}
      >
        {/* Search Bar */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            borderRadius: 25,
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <TextInput
            placeholder="What are you looking for?"
            placeholderTextColor="#808080" // Grey placeholder
            style={{ flex: 1, height: 40, paddingHorizontal: 10, color: "#333" }} // Typed text dark grey
          />
          <TouchableOpacity
            style={{
              backgroundColor: "yellow", // Yellow circle
              borderRadius: 50,
              padding: 6,
            }}
          >
            <Icon name="search" size={20} color="brown" />
          </TouchableOpacity>
        </View>

        {/* Location Row */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="location-sharp" size={16} color="#4CAF50" style={{ marginRight: 4 }} /> {/* Green icon */}
            <Text style={{ color: "#000", fontSize: 14 }}>All of Sri Lanka </Text> {/* Black text */}
          </View>
          <TouchableOpacity onPress={() => console.log("Change location pressed")}>
            <Text style={{ color: "#00BFFF", fontSize: 14, textDecorationLine: "underline" }}>Change location</Text> {/* Sky blue text */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={{ padding: 8, paddingBottom: 100 }}
      />

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}
