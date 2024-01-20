import { DATABASE_URL } from "@env";

import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const Description = ({ route }) => {
  const { id } = route?.params || {};
  const [listingData, setListingData] = useState([]);

  const stripHtmlTags = (html) => {
    const regex = /(<([^>]+)>)/gi;
    return html.replace(regex, "");
  };

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const response = await fetch(`${DATABASE_URL}/api/detail/${id}`);
        const data = await response.json();
        // Remove HTML tags from item.des and set the cleaned text to listingData
        setListingData(
          data.map((item) => ({ ...item, des: stripHtmlTags(item.des) }))
        );
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
            <MaterialIcons
              name="description"
              size={16}
              color="#111"
              style={{
                marginRight: 2,
              }}
            />
            <Text>Description</Text>
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
              <Text style={{ fontSize: 16 }}>{items.des}</Text>
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

export default Description;
