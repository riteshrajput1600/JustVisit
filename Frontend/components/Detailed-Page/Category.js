import { DATABASE_URL } from "@env";

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";

const Category = ({ route }) => {
  const { id } = route?.params || {};

  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const response = await fetch(`${DATABASE_URL}/api/subcategory/${id}`);
        const data = await response.json();
        setListingData(data);
      } catch (error) {
        console.error("Error fetching listing data:", error);
      }
    };

    fetchListingData();
  }, [id]);

  return (
    <ScrollView>
      {/* Use listingData as needed in your component */}
      <View style={styles.cardContainer}>
        <View style={{ margin: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather
              name="bookmark"
              size={16}
              color="#111"
              style={{
                marginRight: 2,
              }}
            />
            <Text>Category</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
              margin: 10,
            }}
          />

          {listingData.map((items) => (
            <TouchableOpacity
              key={items.id}
              style={styles.card}
              activeOpacity={0.8}
            >
              <Text>{items.subcategory}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cardImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});

export default Category;
