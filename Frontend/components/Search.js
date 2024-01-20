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

const Search = () => {
  const [city, setCity] = useState("Patna");
  const [query, setQuery] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [querySuggestions, setQuerySuggestions] = useState([]);

  useEffect(() => {
    handlePartialCityInput(city);
  }, [city]);
  useEffect(() => {
    handlePartialQueryInput(query);
  }, [query]);

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
    setTimeout(() => {
      setCitySuggestions([]);
    }, 500);
  };

  const handleQuerySelection = (selectedQuery) => {
    setQuery(selectedQuery);
    setTimeout(() => {
      setQuerySuggestions([]);
    }, 500);
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
            onChangeText={(text) => {
              setCity(text);
            }}
          />

          {citySuggestions.length > 0 && (
            <View style={styles.suggestionsContainer}>
              {citySuggestions.map((suggestion, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleCitySelection(suggestion)}
                >
                  <Text>{suggestion}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="What are you looking for?"
            style={styles.input}
            value={query}
            onChangeText={(text) => {
              setQuery(text);
              // handlePartialQueryInput(text);
            }}
          />
          {querySuggestions.length > 0 && (
            <View style={styles.suggestionsContainer}>
              {querySuggestions.map((suggestion, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleQuerySelection(suggestion)}
                >
                  <Text>{suggestion}</Text>
                </TouchableOpacity>
              ))}
            </View>
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
    backgroundColor: "white",
  },
  scrollContainer: {
    padding: 16,
    justifyContent: "center",
  },
  inputContainer: {
    marginBottom: 16,
    position: "relative", // Add this to allow absolute positioning of suggestions
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    marginBottom: 16,
  },
  suggestionsContainer: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
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
});

export default Search;
