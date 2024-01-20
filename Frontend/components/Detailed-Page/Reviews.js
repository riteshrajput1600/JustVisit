import { DATABASE_URL } from "@env";

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

const Reviews = ({ route }) => {
  const { id } = route?.params || {};
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const response = await fetch(`${DATABASE_URL}/api/gallery/${id}`);
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
            <Entypo
              name="star-outlined"
              size={16}
              color="#111"
              style={{
                marginRight: 2,
              }}
            />
            <Text>Reviews</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
              margin: 10,
            }}
          />

          {[...new Set(listingData.map((item) => item.id))].map((uniqueId) => {
            const uniqueItem = listingData.find((item) => item.id === uniqueId);
            return (
              <TouchableOpacity
                key={uniqueId}
                style={styles.card}
                activeOpacity={0.8}
              >
                {uniqueItem.comment ? (
                  <>
                    <Text style={{ fontSize: 16 }}>{uniqueItem.comment}</Text>
                  </>
                ) : (
                  <Text>No data available</Text>
                )}
              </TouchableOpacity>
            );
          })}
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

export default Reviews;
