
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Search = () => {
  return (
    <View className="p-4 bg-white justify-center m-4 mb-2">
      <TextInput
        placeholder="Enter your City"
        className="border border-black p-2 mb-4"
        value={city}
      />
      
      <TextInput
        placeholder="What are you looking for?"
        className="border border-black p-2 mb-4"
        value={query}
      />
      
      <TouchableOpacity onPress={handleSearch}>
        <LinearGradient
          colors={["#f5548e", "#903af9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            padding: 10,
            alignItems: "center",
            borderRadius: 7,
          }}
        >
          <Text
            className="font-extrabold text-base "
            style={{ color: "#ffffff" }}
          >
            SearchBar
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
