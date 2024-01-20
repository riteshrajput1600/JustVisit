import { DATABASE_URL } from "@env";

import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Linking,
} from "react-native";
import Header from "../components/Header";
import All from "../components/Detailed-Page/All";
import Gallery from "../components/Detailed-Page/Gallery";
import Description from "../components/Detailed-Page/Description";
import Video from "../components/Detailed-Page/Video";
import Faqs from "../components/Detailed-Page/Faqs";
import Reviews from "../components/Detailed-Page/Reviews";
import AddReview from "../components/Detailed-Page/AddReview";
import { LinearGradient } from "expo-linear-gradient";
import Category from "../components/Detailed-Page/Category";

const DetailedScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const dialCall = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ marginBottom: 55 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Header navigation={navigation} />
        <All route={route} />
        <Description route={route} />
        <Gallery route={route} />
        <Video route={route} />
        <Faqs route={route} />
        <Reviews route={route} />
        <AddReview route={route} />
        <Category route={route} />
      </ScrollView>

      {/* Sticky buttons at the bottom */}
      <View style={styles.stickyButtons}>
        <TouchableOpacity
          style={styles.stickyButton}
          onPress={() => dialCall(`${item.mobileno}`)}
        >
          {/* ... Call button content ... */}
          <LinearGradient
            colors={["#f5548e", "#903af9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              padding: 10,
              paddingHorizontal: 60, // Adjust the padding as needed
              alignItems: "center",
              borderRadius: 7,
            }}
          >
            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Call</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.stickyButton}
          onPress={() => dialCall(123456789)}
        >
          {/* ... Enquiry button content ... */}
          <LinearGradient
            colors={["#903af9", "#f5548e"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              padding: 10,
              paddingHorizontal: 50, // Adjust the padding as needed
              alignItems: "center",
              borderRadius: 7,
            }}
          >
            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
              Enquiry
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stickyButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff", // adjust background color as needed
    borderTopWidth: 1,
    borderTopColor: "#ccc", // adjust border color as needed
    position: "absolute",
    bottom: 0,
  },
  stickyButton: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 7,
  },
});

export default DetailedScreen;

<TouchableOpacity
  style={styles.card}
  activeOpacity={0.8}
  onPress={() => {
    navigation.navigate("DetailedScreen", {
      id: item.id,
      mob: item.mobileno,
    });
    console.log(item.id);
  }}
>
  <View style={styles.cardContainer}>
    <View
      style={{
        alignItems: "center",
        marginTop: 15,
        marginBottom: 10,
      }}
    >
      <Image
        source={{
          uri: item.logo
            ? `https://www.justvisitonline.com/photo/${item.logo}`
            : "https://www.justvisitonline.com/photo/default-logo.jpg",
        }}
        style={styles.cardImage}
      />
    </View>
    {/* Rest of your code remains unchanged */}

    <View style={{ flex: 1, overflow: "hidden", marginLeft: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "900" }}>{item.cname}</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome5 name="user-alt" style={{ fontSize: 16 }} />
        <Text style={{ fontSize: 16, marginLeft: 10 }}>: {item.cperson}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons name="star" style={{ fontSize: 16 }} />
        <Text style={{ fontSize: 16, marginLeft: 10 }}>:</Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 10,
            backgroundColor: "yellow",
            padding: 5,
            borderRadius: 5,
          }}
        >
          {item.rating !== null ? item.rating + "/5" : "0/5"}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons name="email" style={{ fontSize: 16 }} />
        <Text style={{ fontSize: 16, marginLeft: 10 }}>: {item.email}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome name="globe" style={{ fontSize: 16 }} />
        <Text style={{ fontSize: 16, marginLeft: 10 }}>: {item.website}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome5 name="map-marker-alt" style={{ fontSize: 16 }} />
        <Text style={{ fontSize: 16, marginLeft: 10 }}>: {item.address}</Text>
      </View>
    </View>

    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#787878",
        margin: 10,
      }}
    />
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 5,
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, marginRight: 5 }}
          onPress={() => dialCall(`${item.mobileno}`)}
        >
          <LinearGradient
            colors={["#f5548e", "#903af9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              padding: 10,
              paddingHorizontal: 25,
              alignItems: "center",
              borderRadius: 7,
            }}
          >
            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Call</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, marginLeft: 5 }}
          onPress={() => dialCall(123456789)}
        >
          <LinearGradient
            colors={["#903af9", "#f5548e"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              padding: 10,
              paddingHorizontal: 25,
              alignItems: "center",
              borderRadius: 7,
            }}
          >
            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
              Enquiry
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</TouchableOpacity>;

const renderItem = useCallback(
  ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("DetailedScreen", {
          id: item.id,
          mob: item.mobileno,
        });
        console.log(item.id);
      }}
    >
      <View style={styles.cardContainer}>
        <View
          style={{
            alignItems: "center",
            marginTop: 15,
            marginBottom: 10,
          }}
        >
          <Image
            source={{
              uri: item.logo
                ? `https://www.justvisitonline.com/photo/${item.logo}`
                : "https://www.justvisitonline.com/photo/default-logo.jpg",
            }}
            style={styles.cardImage}
          />
        </View>
        {/* Rest of your code remains unchanged */}

        <View style={{ flex: 1, overflow: "hidden", marginLeft: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "900" }}>{item.cname}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5 name="user-alt" style={{ fontSize: 16 }} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>
              : {item.cperson}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="star" style={{ fontSize: 16 }} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>:</Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                backgroundColor: "yellow",
                padding: 5,
                borderRadius: 5,
              }}
            >
              {item.rating !== null ? item.rating + "/5" : "0/5"}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="email" style={{ fontSize: 16 }} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>: {item.email}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome name="globe" style={{ fontSize: 16 }} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>
              : {item.website}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5 name="map-marker-alt" style={{ fontSize: 16 }} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>
              : {item.address}
            </Text>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#787878",
            margin: 10,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 5,
              marginHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, marginRight: 5 }}
              onPress={() => dialCall(`${item.mobileno}`)}
            >
              <LinearGradient
                colors={["#f5548e", "#903af9"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  padding: 10,
                  paddingHorizontal: 25,
                  alignItems: "center",
                  borderRadius: 7,
                }}
              >
                <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                  Call
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, marginLeft: 5 }}
              onPress={openEnquiryModal}
            >
              <LinearGradient
                colors={["#903af9", "#f5548e"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  padding: 10,
                  paddingHorizontal: 25,
                  alignItems: "center",
                  borderRadius: 7,
                }}
              >
                <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                  Enquiry
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showEnquiryModal}
            onRequestClose={closeEnquiryModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <EnquiryForm onClose={closeEnquiryModal} />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </TouchableOpacity>
  ),
  [navigation]
);
