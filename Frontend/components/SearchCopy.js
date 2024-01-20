import { DATABASE_URL } from "@env";

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SearchCopy = ({ navigation }) => {
  const [city, setCity] = useState("Patna");
  const [query, setQuery] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [querySuggestions, setQuerySuggestions] = useState([]);
  const [cityFocused, setCityFocused] = useState(false);
  const [queryFocused, setQueryFocused] = useState(false);

  useEffect(() => {
    if (cityFocused && city.length >= 2) {
      handlePartialCityInput(city);
    }
  }, [city, cityFocused]);

  useEffect(() => {
    if (queryFocused && query.length >= 3) {
      handlePartialQueryInput(query);
    }
  }, [query, queryFocused]);

  const handlePress = async () => {
    try {
      const response = await fetch(`${DATABASE_URL}/api/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city, query }),
      });

      if (!response.ok) {
        throw new Error("Search request failed");
      }

      const searchData = await response.json();
      console.log("Search Results:", searchData);
      navigation.navigate("ResultsScreen", { searchData: searchData });
    } catch (error) {
      console.error("Error during search:", error);
      Alert.alert("Error", "Failed to perform search. Please try again.");
    }
  };

  const handlePartialCityInput = async (partialInput) => {
    try {
      // Check if the entered text is the default city
      if (partialInput.toLowerCase() === "Patna") {
        // Skip the API call for suggestions
        setCitySuggestions([]);
        return;
      }

      const response = await fetch(`${DATABASE_URL}/api/city-suggestions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ partialInput }),
      });

      if (!response.ok) {
        throw new Error("City Suggestions request failed");
      }

      const { suggestions } = await response.json();
      setCitySuggestions(suggestions || []);
    } catch (error) {
      console.error("Error getting city suggestions:", error);
    }
  };

  const handleCitySelection = (selectedCity) => {
    setCity(selectedCity);
    setCityFocused(false);
    setTimeout(() => {
      setCitySuggestions([]);
    }, 500);
  };

  const handleQuerySelection = (selectedQuery) => {
    console.log("search hai ye", selectedQuery);
    const selectedQueryId = selectedQuery.id;
    const selectedQueryMobileno = selectedQuery.mobileno;
    const selectedQueryType = selectedQuery.type;
    console.log("search", { selectedQueryMobileno, selectedQueryId });

    setQuery(selectedQuery.cname);
    setQueryFocused(false);
    setTimeout(() => {
      setQuerySuggestions([]);
    }, 500);
    if (selectedQueryType === "product") {
      navigation.navigate("DetailedScreen", {
        id: selectedQueryId,
        mob: selectedQueryMobileno,
      });
    } else {
      navigation.navigate("ResultsScreen", { id: selectedQueryId });
    }
  };

  const handlePartialQueryInput = async (partialInput) => {
    try {
      const response = await fetch(`${DATABASE_URL}/api/query-suggestions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city, partialInput }),
      });

      if (!response.ok) {
        throw new Error("Query Suggestions request failed");
      }

      const { suggestions } = await response.json();
      setQuerySuggestions(suggestions || []);
    } catch (error) {
      console.error("Error getting query suggestions:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your City"
            style={styles.input}
            value={city}
            onChangeText={(text) => setCity(text)}
            onFocus={() => setCityFocused(true)}
          />

          {cityFocused && citySuggestions.length > 0 && (
            <ScrollView
              style={styles.suggestionsScrollContainer}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.suggestionsContainer}>
                {citySuggestions.map((suggestion, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleCitySelection(suggestion)}
                  >
                    <Text
                      style={
                        index > 0
                          ? styles.suggestionTextWithBorder
                          : styles.suggestionText
                      }
                    >
                      {suggestion}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="What are you looking for?"
            style={styles.input}
            value={query}
            onChangeText={(text) => setQuery(text)}
            onFocus={() => setQueryFocused(true)}
          />
          {queryFocused && querySuggestions.length > 0 && (
            <ScrollView
              style={styles.suggestionsScrollContainer}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.suggestionsContainer}>
                {querySuggestions.map((suggestion, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleQuerySelection(suggestion)}
                  >
                    <Text
                      style={
                        index > 0
                          ? styles.suggestionTextWithBorder
                          : styles.suggestionText
                      }
                    >
                      {suggestion.cname}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          )}
        </View>

        <TouchableOpacity onPress={handlePress}>
          <LinearGradient
            colors={["#f5548e", "#903af9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Search</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    justifyContent: "center",
    marginHorizontal: 20,
    backgroundColor: "white",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  scrollContainer: {
    padding: 16,
    justifyContent: "center",
    margin: 4,
  },
  inputContainer: {
    marginBottom: 16,
    position: "relative",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    marginBottom: 16,
  },
  suggestionsContainer: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    maxHeight: 150, // You can adjust this value based on your preference
    padding: 8,
    overflow: "hidden", // Hide the overflow beyond maxHeight
  },
  suggestionsScrollContainer: {
    flex: 1,
  },
  suggestionsScrollContainer: {
    maxHeight: 150,
  },
  button: {
    padding: 10,
    alignItems: "center",
    borderRadius: 7,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffffff",
  },
  suggestionText: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 8,
  },
  suggestionTextWithBorder: {
    borderTopWidth: 1,
    borderTopColor: "black",
    padding: 8,
  },
});

export default SearchCopy;
