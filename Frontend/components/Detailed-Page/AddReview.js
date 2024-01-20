// AddReview
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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import StarRating from "react-native-star-rating-widget";
import StarRating from "react-native-star-rating-widget";
const AddReview = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");
  const [starRating, setStarRating] = useState(0);

  const handleSubmitButton = async () => {
    // Validate the form data before submission
    if (!name || !email || !mobileNo || starRating === 0) {
      // You can show an error message or perform any other necessary action for validation failure
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    const resetForm = () => {
      setStarRating(0);
      setName("");
      setEmail("");
      setMobileNo("");
      setMessage("");
    };

    try {
      // Construct the data object to be submitted
      const formData = {
        rating: starRating,
        name,
        email,
        mobileno: mobileNo,
        comment: message,
      };

      // Make a POST request to the server to submit the listing data
      const response = await fetch(`${DATABASE_URL}/api/addReview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        Alert.alert("Success", "Thanku for adding reviews");

        resetForm();
      } else {
        // Handle failure, e.g., show an error message
        Alert.alert("Error", "Failed to adding reviews");
      }
    } catch (error) {
      console.error("Error submitting listing:", error);
      Alert.alert("Error", "Internal Server Error");
    }
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
            <Text>Add Reviews</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
              margin: 10,
            }}
          />
          <View style={{ ...styles.SectionStyle, flexDirection: "row" }}>
            <Text style={{ margin: 7 }}>Rating : </Text>
            <StarRating rating={starRating} onChange={setStarRating} />
          </View>
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

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}
          >
            <Text style={styles.buttonTextStyle}>Submit Reviews</Text>
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
    backgroundColor: "#307ecc",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#307ecc",
    height: 40,
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 25,
    marginBottom: 30,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default AddReview;
