// ContactScreen.js
import { DATABASE_URL } from "@env";

import React from "react";
import { View, Text, ScrollView } from "react-native";
import MyCard from "../../components/MyCard"; // Adjust the path based on your project structure
import Header from "../../components/Header";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const ContactScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <View style={{ marginTop: 5, marginBottom: 70 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "900",
            textAlign: "center",
            padding: 15,
            paddingBottom: 5,
          }}
        >
          Add Listing
        </Text>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#787878",
            marginHorizontal: 20,
            marginBottom: 30,
          }}
        />

        <View style={{ paddingLeft: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="numeric-1"
              size={33}
              color="#111"
              style={{
                borderWidth: 1,
                borderColor: "#e3e6ef",
                borderRadius: 20,
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#111",
                paddingLeft: 20,
              }}
            >
              JUST VISIT ONLINE PRIVATE LIMITED
            </Text>
          </View>
          <Text style={{ fontSize: 14, color: "#111", paddingLeft: 55 }}>
            Head Office : 3rd Floor, Awadh Enclave, Opp: Jai Marble, Maurya
            Path, Khajpura, Pillar No.15, Bailey Rd, Patna, Bihar - 800014
          </Text>
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="numeric-2"
              size={33}
              color="#111"
              style={{
                borderWidth: 1,
                borderColor: "#e3e6ef",
                borderRadius: 20,
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#111",
                paddingLeft: 20,
              }}
            >
              Mobile : +91-9771023502
            </Text>
          </View>
          <Text style={{ fontSize: 14, color: "#111", paddingLeft: 55 }}>
            (For corporate enquiries only, you may call us from Monday to
            Saturday between 10 AM to 7 PM)
          </Text>
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="numeric-3"
              size={33}
              color="#111"
              style={{
                borderWidth: 1,
                borderColor: "#e3e6ef",
                borderRadius: 20,
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#111",
                paddingLeft: 20,
              }}
            >
              E-mail : info@justvisitonline.com
            </Text>
          </View>
          <Text style={{ fontSize: 14, color: "#111", paddingLeft: 55 }}>
            Website: www.justvisitonline.com
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactScreen;
