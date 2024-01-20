import { DATABASE_URL } from "@env";

import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";
import Search from "./Search";

const MyCard = React.memo(() => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${DATABASE_URL}/api/categories`);
      const data = await response.json();

      const sortedCategories = data.sort((a, b) =>
        a.category.localeCompare(b.category)
      );

      setCategories(sortedCategories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderCardItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("DetailsScreen", { id: item.id });
      }}
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: `https://www.justvisitonline.com/images/Icon/${item.logo}`,
          }}
          style={styles.cardImage}
        />
        <Text style={styles.categoryName}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View>
      <Header navigation={navigation} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCardItem}
        numColumns={4}
        contentContainerStyle={styles.flatListContainer}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  flatListContainer: {
    flexGrow: 1,
  },
  cardContainer: {
    flex: 1,
    margin: 15,
    borderRadius: 10,
    // Add elevation for Android shadow
  },
  card: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 10,
    alignItems: "center",
  },
  cardImage: {
    width: 35, // Set a fixed width
    height: 35, // Set a fixed height
    resizeMode: "contain",
    margin: 5,
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
});

export default MyCard;
