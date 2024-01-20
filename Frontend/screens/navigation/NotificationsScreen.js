// HomeScreen.js
import { DATABASE_URL } from "@env";

import React from "react";
import { View, Text } from "react-native";
import MyCard from "../../components/MyCard"; // Adjust the path based on your project structure

const NotificationsScreen = () => {
  return (
    <View>
      <Text>Other content of your home screen...</Text>
      <MyCard />
    </View>
  );
};

export default NotificationsScreen;
