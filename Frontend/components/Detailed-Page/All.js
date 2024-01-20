import { DATABASE_URL } from "@env";

import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const All = ({ route }) => {
  const { id } = route?.params || {};
  // console.log("all.js", id);

  const [listingData, setListingData] = useState([]);
  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const response = await fetch(`${DATABASE_URL}/api/detail/${id}`);
        const data = await response.json();
        setListingData(data);
      } catch (error) {
        console.error("Error fetching listing data:", error);
      }
    };

    fetchListingData();
  }, [id]); // Pass [id] as the second argument to useEffect

  return (
    <ScrollView>
      {/* Use listingData as needed in your component */}
      {listingData.map((items) => (
        <TouchableOpacity
          key={items.id}
          style={styles.card}
          activeOpacity={0.8}
        >
          <View style={styles.cardContainer}>
            <View style={{ margin: 10, flexDirection: "row" }}>
              <Image
                source={{
                  uri: items.logo
                    ? `https://www.justvisitonline.com/photo/${items.logo}`
                    : "https://www.justvisitonline.com/photo/default-logo.jpg",
                }}
                style={styles.cardImage}
              />

              <View style={{ flex: 1, overflow: "hidden", marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "900" }}>
                  {items.cname}
                </Text>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome5 name="user-alt" style={{ fontSize: 16 }} />
                  <Text style={{ fontSize: 16, marginLeft: 10 }}>
                    : {items.cperson}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="star"
                    style={{ fontSize: 16 }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 10,
                    }}
                  >
                    :
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 10,
                      backgroundColor: "yellow",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    {items.rating !== null ? items.rating + "/5" : "0/5"}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="email"
                    style={{ fontSize: 16 }}
                  />
                  <Text style={{ fontSize: 16, marginHorizontal: 10 }}>
                    : {items.email}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome name="globe" style={{ fontSize: 16 }} />
                  <Text style={{ fontSize: 16, marginLeft: 10 }}>
                    : {items.website}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 20,
                marginBottom: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="map-marker-alt" style={{ fontSize: 16 }} />
              <Text style={{ fontSize: 16, marginLeft: 10 }}>
                : {items.address}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff", // Card background color
    borderRadius: 10, // Card border radius
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // for Android
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cardImage: {
    width: 150,
    height: 150,

    resizeMode: "contain",
  },
});
export default All;
