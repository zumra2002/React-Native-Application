import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BottomNav from "@/components/BottomNav";

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
      {/* Navbar */}
      <View style={styles.navbar}>
        {/* Left: icon + ikman text (row) then result count (below) */}
        <View style={styles.leftHeader}>
          <View style={styles.brandRow}>
            <Image
              // use your small icon image here; if your ikman-logo.png is the full logo,
              // replace with a smaller icon file (e.g. ikman-icon.png)
              source={require("../assets/images/ikman-logo.png")}
              style={styles.icon}
            />
            <Text style={styles.logoText}>ikman</Text>
          </View>
          <Text style={styles.resultCount}>380739 results</Text>
        </View>

        {/* Right: Save search */}
        <TouchableOpacity style={styles.saveSearchBtn}>
          <Icon name="bookmark-outline" size={18} color="#fff" />
          <Text style={styles.saveSearchText}> Save search</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Row */}
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

      {/* Ads Grid */}
      <FlatList
        data={ads}
        renderItem={({ item }) => <AdCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },

  navbar: {
    backgroundColor: "#0a9d58",
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  leftHeader: {
    flexDirection: "column",
    justifyContent: "center",
  },

  brandRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    marginRight: 8,
  },

  logoText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },

  resultCount: {
    fontSize: 12,
    color: "#fff",
    marginTop: 2,
  },

  saveSearchBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },

  saveSearchText: {
    color: "#fff",
    fontSize: 14,
  },

  filterBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  filterButton: { flexDirection: "row", alignItems: "center" },
  filterText: { fontSize: 14, fontWeight: "500", color: "#0a9d58", marginLeft: 4 },

  grid: { padding: 8, paddingBottom: 70 },

  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 6,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },

  image: { width: "100%", height: 120, resizeMode: "cover" },
  title: { fontSize: 14, fontWeight: "600", marginBottom: 4 },
  price: { fontSize: 14, fontWeight: "bold", color: "green", marginBottom: 4 },
  badges: { flexDirection: "row", alignItems: "center", marginBottom: 4 },

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

  seller: { fontSize: 10, color: "#007BFF", fontWeight: "600" },
  time: { fontSize: 10, color: "#888" },
});
