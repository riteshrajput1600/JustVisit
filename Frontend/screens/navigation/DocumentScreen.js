// DocumentScreen.js
import { DATABASE_URL } from "@env";

import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import Header from "../../components/Header";

const DocumentScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />

      <View style={{ marginTop: 5, marginBottom: 60, paddingHorizontal: 15 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "900",
            textAlign: "center",
            padding: 15,
            paddingBottom: 5,
          }}
        >
          Bank Details
        </Text>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#787878",
            marginHorizontal: 20,
            marginBottom: 20,
          }}
        />

        {/* Card Container */}
        <View style={styles.cardContainer}>
          {/* Image Inside the Card */}
          <Image
            source={require("../../assets/category/category/axis-bank-logo.jpg")}
            style={styles.image}
          />
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
              margin: 10,
            }}
          />

          <Text
            style={{
              paddingHorizontal: 20,
            }}
          >
            Bank Name :- Axis Bank
          </Text>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
              margin: 10,
            }}
          />

          <Text
            style={{
              paddingHorizontal: 20,
            }}
          >
            Account Name :- Just Visit Online Pvt. Ltd.
          </Text>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
              margin: 10,
            }}
          />

          <Text
            style={{
              paddingHorizontal: 20,
            }}
          >
            Account No. :- 914020010355424
          </Text>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
              margin: 10,
            }}
          />

          <Text
            style={{
              paddingHorizontal: 20,
            }}
          >
            IFSC Code :- UTIB0001664
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
              margin: 10,
            }}
          />

          <Text
            style={{
              paddingHorizontal: 20,
            }}
          >
            Branch Name :- Anisabad Patna
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
              margin: 10,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "900",
            textAlign: "center",
            padding: 15,
          }}
        >
          Legal Documents
        </Text>

        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#787878",
            marginHorizontal: 20,
            marginBottom: 20,
          }}
        />

        {/* Card Container */}
        <View style={styles.cardContainer1}>
          {/* Image Inside the Card */}
          <Image
            source={require("../../assets/category/category/certificate1.jpg")}
            style={styles.image1}
          />
        </View>
        <View style={styles.cardContainer1}>
          {/* Image Inside the Card */}
          <Image
            source={require("../../assets/category/category/certificate2.jpg")}
            style={styles.image1}
          />
        </View>
        <View style={styles.cardContainer2}>
          {/* Image Inside the Card */}
          <Image
            source={require("../../assets/category/category/certificate3.jpg")}
            style={styles.image2}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff", // Card background color
    borderRadius: 10, // Card border radius
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // for Android
    marginVertical: 10,
  },
  image: {
    width: "100%", // Make sure the image takes the full width of the card
    height: 100,
    borderRadius: 10, // Optional: Add border radius to the image
    resizeMode: "cover",
  },

  cardContainer1: {
    backgroundColor: "#fff", // Card background color
    borderRadius: 10, // Card border radius
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // for Android
    marginVertical: 10,
    justifyContent: "center", // Center the content vertically
    alignItems: "center", // Center the content horizontally
  },
  image1: {
    width: "95%", // Make sure the image takes the full width of the card
    height: 400,
    borderRadius: 10, // Optional: Add border radius to the image
    resizeMode: "cover",
    marginVertical: 10, // Adjust as needed for space from top and bottom
  },

  cardContainer2: {
    backgroundColor: "#fff", // Card background color
    borderRadius: 10, // Card border radius
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // for Android
    marginVertical: 10,
    justifyContent: "center", // Center the content vertically
    alignItems: "center", // Center the content horizontally
  },
  image2: {
    width: "95%", // Make sure the image takes the full width of the card
    height: 200,
    borderRadius: 10, // Optional: Add border radius to the image
    resizeMode: "cover",
    marginVertical: 10, // Adjust as needed for space from top and bottom
  },
});

export default DocumentScreen;
