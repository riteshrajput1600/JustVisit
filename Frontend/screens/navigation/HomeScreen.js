// HomeScreen.js
import { DATABASE_URL } from "@env";

import React from "react";
import { View, Text, ScrollView } from "react-native";
import MyCard from "../../components/MyCard"; // Adjust the path based on your project structure
import Header from "../../components/Header";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ marginBottom: 60 }}>
      <MyCard navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
