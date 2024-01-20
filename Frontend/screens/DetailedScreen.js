import { DATABASE_URL } from "@env";

import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Linking,
  Modal,
} from "react-native";
import Header from "../components/Header";
import All from "../components/Detailed-Page/All";
import Gallery from "../components/Detailed-Page/Gallery";
import Description from "../components/Detailed-Page/Description";
import Video from "../components/Detailed-Page/Video";
import Faqs from "../components/Detailed-Page/Faqs";
import Reviews from "../components/Detailed-Page/Reviews";
import AddReview from "../components/Detailed-Page/AddReview";
import EnquiryForm from "../components/EnquiryForm"; // Adjust the import path
import { LinearGradient } from "expo-linear-gradient";
import Category from "../components/Detailed-Page/Category";

const DetailedScreen = ({ route, navigation }) => {
  const { id, mob } = route.params;
  console.log("mob no from detailed page", mob);
  console.log("id from detailed page", id);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const dialCall = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  const openEnquiryModal = () => {
    setShowEnquiryModal(true);
  };

  const closeEnquiryModal = () => {
    setShowEnquiryModal(false);
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
          onPress={() => dialCall(`${mob}`)}
        >
          <LinearGradient
            colors={["#f5548e", "#903af9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              padding: 10,
              paddingHorizontal: 60,
              alignItems: "center",
              borderRadius: 7,
            }}
          >
            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Call</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.stickyButton}
          onPress={openEnquiryModal}
        >
          <LinearGradient
            colors={["#903af9", "#f5548e"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              padding: 10,
              paddingHorizontal: 50,
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

      {/* EnquiryForm Modal */}
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
  );
};

const styles = StyleSheet.create({
  stickyButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
});

export default DetailedScreen;
