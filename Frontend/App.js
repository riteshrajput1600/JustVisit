import React from "react";
import { Text, Platform, View, StatusBar } from "react-native"; // Import StatusBar from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import DetailsScreen from "./screens/DetailsScreen";
import DetailedScreen from "./screens/DetailedScreen";
import HomeScreen from "./screens/navigation/HomeScreen";
import AboutScreen from "./screens/navigation/AboutScreen";
import DocumentScreen from "./screens/navigation/DocumentScreen";
import ContactScreen from "./screens/navigation/ContactScreen";
import AddListingScreen from "./screens/navigation/AddListingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SplashScreen from "./screens/SplashScreen";
import ResultsScreen from "./screens/ResultsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarActiveTintColor: "#16247d",
  tabBarInactiveTintColor: "#111",
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};

const AuthenticationStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register",
          headerStyle: {
            backgroundColor: "#307ecc",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Entypo
                name="home"
                size={focused ? 40 : 30}
                color={focused ? "#16247d" : "#111"}
              />
              {/* <Text
                style={{ fontSize: 12, color: focused ? "#16247d" : "#111" }}
              >
                HOME
              </Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="help-circle"
                size={focused ? 43 : 33}
                color={focused ? "#16247d" : "#111"}
              />
              {/* <Text
                style={{ fontSize: 12, color: focused ? "#16247d" : "#111" }}
              >
                ABOUT
              </Text> */}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Add Listing"
        component={AddListingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Entypo
                name="circle-with-plus"
                size={focused ? 43 : 33}
                color={focused ? "#16247d" : "#111"}
              />
              {/* <Text
                style={{
                  fontSize: 12,
                  color: focused ? "#16247d" : "#111",
                  
                }}
              >
                ADD LISTING
              </Text> */}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Documents"
        component={DocumentScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Entypo
                name="book"
                size={focused ? 40 : 30}
                color={focused ? "#16247d" : "#111"}
              />
              {/* <Text
                style={{ fontSize: 12, color: focused ? "#16247d" : "#111" }}
              >
                DOCUMENTS
              </Text> */}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Contact Us"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="contacts"
                size={focused ? 40 : 30}
                color={focused ? "#16247d" : "#111"}
              />
              {/* <Text
                style={{ fontSize: 12, color: focused ? "#16247d" : "#111" }}
              >
                CONTACT US
              </Text> */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthenticationStack} />
        <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
        <Stack.Screen name="DetailedScreen" component={DetailedScreen} />
      </Stack.Navigator>
      {/* Set the StatusBar properties */}
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </NavigationContainer>
  );
}
