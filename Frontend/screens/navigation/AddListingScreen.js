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
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from "../../components/Header";

const AddListingScreen = ({ navigation }) => {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [otherMobileNo, setOtherMobileNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [description, setDescription] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(true); // Default to true

  const handleSubmitButton = async () => {
    // Validate the form data before submission
    if (
      !companyName ||
      !contactName ||
      !email ||
      !mobileNo ||
      !address ||
      !category
    ) {
      // You can show an error message or perform any other necessary action for validation failure
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    const resetForm = () => {
      setCompanyName("");
      setContactName("");
      setEmail("");
      setMobileNo("");
      setOtherMobileNo("");
      setPhoneNo("");
      setAddress("");
      setWebsite("");
      setCategory("");
      setSubcategory("");
      setDescription("");
      setAgreedTerms(true);
    };

    try {
      // Construct the data object to be submitted
      const formData = {
        cname: companyName,
        cperson: contactName,
        email,
        mobileno: mobileNo,
        mobileno_other: otherMobileNo,
        phoneno: phoneNo,
        address,
        website,
        category,
        subcategory,
        description,
        agreedTerms,
      };

      // Make a POST request to the server to submit the listing data
      const response = await fetch(`${DATABASE_URL}/api/addlisting`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Handle success, e.g., show a success message
        Alert.alert("Success", "Listing submitted successfully");
        // Reset the form after successful submission
        resetForm();
      } else {
        // Handle failure, e.g., show an error message
        Alert.alert("Error", "Failed to submit listing");
      }
    } catch (error) {
      console.error("Error submitting listing:", error);
      Alert.alert("Error", "Internal Server Error");
    }
  };

  return (
    <ScrollView>
      <Header navigation={navigation} />
      <View style={{ marginTop: 5, marginBottom: 60 }}>
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
          }}
        />
        <View style={{ padding: 20 }}>
          <View style={styles.cardContainer}>
            <View style={styles.SectionStyle}>
              <Text style={styles.label}>Company Name</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setCompanyName(text)}
                value={companyName}
                placeholder="Enter Company Name"
                placeholderTextColor="#8b9cb5"
              />
            </View>

            <View style={styles.SectionStyle}>
              <Text style={styles.label}>Contact Name</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setContactName(text)}
                value={contactName}
                placeholder="Enter Contact Name"
                placeholderTextColor="#8b9cb5"
              />
            </View>

            <View style={styles.SectionStyle}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.SectionStyle}>
              <Text style={styles.label}>Mobile No</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setMobileNo(text)}
                value={mobileNo}
                placeholder="Enter Mobile No"
                placeholderTextColor="#8b9cb5"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.SectionStyle}>
              <Text style={styles.label}>Other Mobile No</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setOtherMobileNo(text)}
                value={otherMobileNo}
                placeholder="Enter Other Mobile No"
                placeholderTextColor="#8b9cb5"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.SectionStyle}>
              <Text style={styles.label}>Phone No</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setPhoneNo(text)}
                value={phoneNo}
                placeholder="Enter Phone No"
                placeholderTextColor="#8b9cb5"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.SectionStyle}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setAddress(text)}
                value={address}
                placeholder="Enter Address"
                placeholderTextColor="#8b9cb5"
                multiline={true}
              />
            </View>

            <View style={styles.SectionStyle}>
              <Text style={styles.label}>Website</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setWebsite(text)}
                value={website}
                placeholder="Enter Website"
                placeholderTextColor="#8b9cb5"
                keyboardType="url"
              />
            </View>

            <View style={styles.SectionStyle}>
              <Text style={styles.label}>Category</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setCategory(text)}
                value={category}
                placeholder="Enter Category"
                placeholderTextColor="#8b9cb5"
              />
            </View>

            <View style={styles.SectionStyle}>
              <Text style={styles.label}>Subcategory</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setSubcategory(text)}
                value={subcategory}
                placeholder="Enter Subcategory"
                placeholderTextColor="#8b9cb5"
              />
            </View>

            <View style={styles.SectionStyle}>
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setDescription(text)}
                value={description}
                placeholder="Description"
                placeholderTextColor="#8b9cb5"
                multiline={true}
              />
            </View>

            <View style={styles.BouncyCheckboxContainer}>
              <BouncyCheckbox
                value={agreedTerms}
                onValueChange={(value) => setAgreedTerms(value)}
              />
              <Text style={styles.BouncyCheckboxLabel}>
                I Agree with all{" "}
                <Text style={{ color: "blue" }}>Terms & Conditions</Text>
              </Text>
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}
            >
              <Text style={styles.buttonTextStyle}>Submit Listing</Text>
            </TouchableOpacity>
          </View>
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
    paddingTop: 30,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    marginVertical: 10,
  },
  SectionStyle: {
    flexDirection: "column",
    marginHorizontal: 35,
    marginBottom: 20,
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
  BouncyCheckboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 30,
  },
  BouncyCheckboxLabel: {
    marginLeft: 8,
    fontSize: 16,
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

export default AddListingScreen;
