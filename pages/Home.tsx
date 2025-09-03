import BottomNav from "@/components/BottomNav";
import React from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// ✅ Local Ads Data with require()
const ads = [
  {
    id: "1",
    title: "SEGOTEP GANK 240S GAMING CASING TOWER",
    price: "Rs 12,500",
    tag: "MEMBER",
    seller: "VERIFIED SELLER",
    image: require("../assets/images/casing.jpg"),
  },
  {
    id: "2",
    title: "Best Residential Land for Sale in Athurugiriya",
    price: "Rs 1,000,000 per perch",
    tag: "MEMBER",
    seller: "VERIFIED SELLER",
    image: require("../assets/images/land.jpg"),
  },
  {
    id: "3",
    title: "GTX 1060 3GB OC GAMING GPU",
    price: "Rs 45,000",
    tag: "MEMBER",
    seller: "VERIFIED SELLER",
    image: require("../assets/images/gpu.jpg"),
  },
  {
    id: "4",
    title: "LOGITECH G102 RGB PROFESSIONAL GAMING MOUSE",
    price: "Rs 7,400",
    tag: "MEMBER",
    seller: "VERIFIED SELLER",
    image: require("../assets/images/mouse.jpg"),
  },
];

// ✅ Single Ad Card
const AdCard = ({ item }: { item: typeof ads[0] }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={item.image} style={styles.image} />
    <View style={{ padding: 8 }}>
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.price}>{item.price}</Text>
      <View style={styles.badges}>
        <Text style={styles.badge}>{item.tag}</Text>
        <Text style={styles.seller}>{item.seller}</Text>
      </View>
      <Text style={styles.time}>Just now</Text>
    </View>
  </TouchableOpacity>
);

export default function Home() {
  return (
    <View style={styles.container}>
      {/* ✅ Navbar */}
      <View style={styles.navbar}>
        <View>
          <Text style={styles.logo}>ikman</Text>
          <Text style={styles.resultCount}>380739 results</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.saveSearch}>Save search</Text>
        </TouchableOpacity>
      </View>

      {/* ✅ Filter Row */}
      <View style={styles.filterBar}>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="location-outline" size={18} color="#0a9d58" />
          <Text style={styles.filterText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="grid-outline" size={18} color="#0a9d58" />
          <Text style={styles.filterText}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="filter-outline" size={18} color="#0a9d58" />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
      </View>

      {/* ✅ Ads Grid */}
      <FlatList
        data={ads}
        renderItem={({ item }) => <AdCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />

      {/* ✅ Bottom Navigation (Only) */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#0a9d58", // ✅ Green header
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  resultCount: {
    fontSize: 12,
    color: "#fff",
  },
  saveSearch: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
  filterBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0a9d58",
    marginLeft: 4,
  },
  grid: {
    padding: 8,
    paddingBottom: 70,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 6,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
    marginBottom: 4,
  },
  badges: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  badge: {
    backgroundColor: "gold",
    color: "#000",
    fontSize: 10,
    fontWeight: "600",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 6,
  },
  seller: {
    fontSize: 10,
    color: "#007BFF",
    fontWeight: "600",
  },
  time: {
    fontSize: 10,
    color: "#888",
  },
});
