import { DATABASE_URL } from "@env";

import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Search from "./Search";
import SearchBar from "./SearchBar";
import SearchCopy from "./SearchCopy";

const Header = ({ navigation }) => {
  const [isToggleBarVisible, setIsToggleBarVisible] = React.useState(false);

  const handleToggleBarPress = () => {
    setIsToggleBarVisible(!isToggleBarVisible);
  };

  const handleScreenPress = () => {
    if (isToggleBarVisible) {
      setIsToggleBarVisible(false);
    }
  };

  const handlePress = () => {
    // You can replace this with any action you want to perform on button press
    Alert.alert("Button Pressed", "Search action here!");
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user_id");
    navigation.replace("Auth");
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={handleScreenPress}>
        <View>
          {/* Conditionally set the status bar color for iOS */}
          {Platform.OS === "ios" && (
            <StatusBar
              style="dark"
              translucent={false}
              backgroundColor="#2196F3"
            />
          )}
          <StatusBar translucent={false} barStyle="dark-content" />
          <ImageBackground
            source={require("../assets/category/category/Slider.png")}
            style={styles.header}
          >
            <View style={styles.header1}>
              <View style={styles.headerContent}>
                <Image
                  source={require("../assets/category/category/logo.png")}
                  style={styles.logo}
                />
              </View>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogout}
              >
                <FontAwesome5
                  style={{}}
                  name="user-circle"
                  size={30}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
      <SearchCopy navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2196F3",
  },
  header1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 12,
    margin: 0,
    paddingBottom: 10,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
    borderBottomWidth: 2,
    margin: 0,
    padding: 0,
  },
  toggleBarButton: {
    paddingLeft: 8,
    margin: 0,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "80%",
    height: 60,
    marginRight: 0,
    paddingRight: 0,
  },
  loginButton: {
    paddingRight: 20,
    margin: 0,
  },
});

export default Header;
