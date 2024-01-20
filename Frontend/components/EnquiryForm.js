// import { DATABASE_URL } from "@env";

import { DATABASE_URL } from "@env";

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AntDesign } from "@expo/vector-icons";
const EnquiryForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitButton = async () => {
    // Validate the form data before submission
    if (!name || !email || !mobileNo) {
      // You can show an error message or perform any other necessary action for validation failure
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    const resetForm = () => {
      setName("");
      setEmail("");
      setMobileNo("");
      setMessage("");
    };

    try {
      // Construct the data object to be submitted
      const formData = {
        name,
        email,
        mobileno: mobileNo,
        enquiry: message,
      };

      // Make a POST request to the server to submit the listing data
      const response = await fetch(`${DATABASE_URL}/api/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        Alert.alert("Success", "Thanku for Enquiry. will get back Soon");

        resetForm();
      } else {
        // Handle failure, e.g., show an error message
        Alert.alert("Error", "Enquiry Failed");
      }
    } catch (error) {
      console.error("Error submitting listing:", error);
      Alert.alert("Error", "Internal Server Error");
    }

    onClose();
  };

  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <View style={{ margin: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name="questioncircle"
              size={16}
              color="#111"
              style={{
                marginRight: 2,
              }}
            />
            <Text>Enquiry</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
              margin: 10,
            }}
          />

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder="Enter Your Name"
              placeholderTextColor="#8b9cb5"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Enter your Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setMobileNo(text)}
              value={mobileNo}
              placeholder="Enter your Mobile No"
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setMessage(text)}
              value={message}
              placeholder="Enter your Message"
              placeholderTextColor="#8b9cb5"
              multiline={true}
            />
          </View>

          <TouchableOpacity activeOpacity={0.5} onPress={handleSubmitButton}>
            <LinearGradient
              colors={["#903af9", "#f5548e"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonStyle}
            >
              <Text style={styles.buttonTextStyle}>Submit Enquiry</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  SectionStyle: {
    flexDirection: "column",
    marginHorizontal: 15,
    marginBottom: 15,
  },
  inputStyle: {
    height: 40,
    color: "#000",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#dadae8",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  buttonStyle: {
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default EnquiryForm;
