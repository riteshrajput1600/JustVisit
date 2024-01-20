import { DATABASE_URL } from "@env";

import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      try {
        // Simulating some async task (e.g., fetching authentication status)
        // Replace this with your actual authentication logic
        await new Promise((resolve) => setTimeout(resolve, 5000));

        const user_id = await AsyncStorage.getItem("user_id");
        navigation.replace(user_id ? "HomeTabNavigator" : "Auth");
      } catch (error) {
        console.error("An error occurred:", error);
        // Handle error (e.g., navigate to an error screen)
      } finally {
        setAnimating(false);
      }
    };

    checkUserAuthentication();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/category/category/logo.png")}
        style={{ width: "100%", resizeMode: "contain", margin: 30 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#307ecc",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
