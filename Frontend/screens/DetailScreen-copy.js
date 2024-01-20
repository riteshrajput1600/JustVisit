// import { DATABASE_URL } from "@env";

import React, { useEffect, useState } from "react";

// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import Header from "../components/Header";
// import {
//   FontAwesome5,
//   FontAwesome,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// // import StarRating from "react-native-star-rating";
// import StarRating from "react-native-star-rating-widget";
// const DetailsScreen = ({ route, navigation }) => {
//   const { category } = route.params;
//   const [listingData, setListingData] = useState([]);

//   useEffect(() => {
//     const fetchListingData = async () => {
//       try {
//         const response = await fetch(
//           `${DATABASE_URL}/api/listing/${category.id}`
//         );
//         const data = await response.json();
//         setListingData(data);
//       } catch (error) {
//         console.error("Error fetching listing data:", error);
//       }
//     };

//     fetchListingData();
//   }, [category.id]);

//   return (
//     <ScrollView>
//       <Header navigation={navigation} />

//       {/* Use listingData as needed in your component */}
//       {listingData.map((ld) => (
//         <TouchableOpacity
//           key={ld.id}
//           style={styles.card}
//           activeOpacity={0.8}
//           onPress={() => {
//             // Handle press event
//             // navigation.navigate("DetailedScreen", { ld });

//           }}
//         >
//           <View style={styles.cardContainer}>
//             <View style={{margin:10, flexDirection:"row" }}>
//               <Image
//                 source={{
//                   uri: ld.logo
//                     ? `https://www.justvisitonline.com/photo/${ld.logo}`
//                     : "https://www.justvisitonline.com/photo/default-logo.jpg",
//                 }}
//                 style={styles.cardImage}
//               />

//               <View style={{ flex: 1, overflow: "hidden", marginLeft: 10 }}>
//                 <Text style={{ fontSize: 16, fontWeight: "900" }}>
//                   {ld.cname}
//                 </Text>

//                 <View style={{ flexDirection: "row", alignItems: "center" }}>
//                   <FontAwesome5 name="user-alt" style={{ fontSize: 16 }} />
//                   <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                     : {ld.cperson}
//                   </Text>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center" }}>
//                   <MaterialCommunityIcons
//                     name="phone"
//                     style={{ fontSize: 16 }}
//                   />
//                   <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                     : {ld.mobileno}
//                   </Text>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center" }}>
//                   <MaterialCommunityIcons
//                     name="email"
//                     style={{ fontSize: 16 }}
//                   />
//                   <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                     : {ld.email}
//                   </Text>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center" }}>
//                   <FontAwesome name="globe" style={{ fontSize: 16 }} />
//                   <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                     : {ld.website}
//                   </Text>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center" }}>
//                   <FontAwesome5
//                     name="map-marker-alt"
//                     style={{ fontSize: 16 }}
//                   />
//                   <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                     : {ld.address}
//                   </Text>
//                 </View>
//               </View>
//             </View>

//             <View
//               style={{
//                 borderBottomWidth: 1,
//                 borderBottomColor: "#787878",
//                 marginHorizontal: 10,
//                 marginBottom: 10,
//               }}
//             />

//             <View style={{ flexDirection: "row", alignItems: "center", marginBottom:10}}>
//               <StarRating rating={ld.rating} />
//             </View>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   cardContainer: {
//     backgroundColor: "#fff", // Card background color
//     borderRadius: 10, // Card border radius
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 5,
//       height: 5,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5, // for Android
//     marginVertical: 10,
//     marginHorizontal: 10,
//   },
//   cardImage: {
//     width: 150,
//     height: 150,

//     resizeMode: "contain",
//   },
// });

// export default DetailsScreen;

// import { DATABASE_URL } from "@env";

import React, { useEffect, useState, memo } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   ActivityIndicator,
//   Linking,
//   Platform,
// } from "react-native";
// import Header from "../components/Header";
// import {
//   FontAwesome5,
//   FontAwesome,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// dialCall = (number) => {
//   let phoneNumber = "";
//   if (Platform.OS === "android") {
//     phoneNumber = `tel:${number}`;
//   } else {
//     phoneNumber = `telprompt:${number}`;
//   }
//   Linking.openURL(phoneNumber);
// };
// // Memoized version of the RenderCard component
// const RenderCard = memo(({ item, navigation }) => {
//   const dialCall = (number) => {
//     let phoneNumber = "";
//     if (Platform.OS === "android") {
//       phoneNumber = `tel:${number}`;
//     } else {
//       phoneNumber = `telprompt:${number}`;
//     }
//     Linking.openURL(phoneNumber);
//   };
//   return (
//     <TouchableOpacity
//       style={styles.card}
//       activeOpacity={0.8}
//       onPress={() => {
//         // Pass the selected category to the DetailsScreen
//         navigation.navigate("DetailedScreen", { item });
//       }}
//     >

//       <View style={styles.cardContainer}>
//         <View style={{ alignItems: "center", marginTop: 15, marginBottom: 10 }}>
//           <Image
//             source={{
//               uri: item.logo
//                 ? `https://www.justvisitonline.com/photo/${item.logo}`
//                 : "https://www.justvisitonline.com/photo/default-logo.jpg",
//             }}
//             style={styles.cardImage}
//           />
//         </View>

//         <View style={{ flex: 1, overflow: "hidden", marginLeft: 20 }}>
//           <Text style={{ fontSize: 16, fontWeight: "900" }}>{item.cname}</Text>

//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <FontAwesome5 name="user-alt" style={{ fontSize: 16 }} />
//             <Text style={{ fontSize: 16, marginLeft: 10 }}>
//               : {item.cperson}
//             </Text>
//           </View>
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <MaterialCommunityIcons name="star" style={{ fontSize: 16 }} />
//             <Text
//               style={{
//                 fontSize: 16,
//                 marginLeft: 10,
//               }}
//             >
//               :
//             </Text>
//             <Text
//               style={{
//                 fontSize: 16,
//                 marginLeft: 10,
//                 backgroundColor: "yellow",
//                 padding: 5,
//                 borderRadius: 5,
//               }}
//             >
//               {item.rating !== null ? item.rating + "/5" : "0/5"}
//             </Text>
//           </View>
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <MaterialCommunityIcons name="email" style={{ fontSize: 16 }} />
//             <Text style={{ fontSize: 16, marginLeft: 10 }}>: {item.email}</Text>
//           </View>
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <FontAwesome name="globe" style={{ fontSize: 16 }} />
//             <Text style={{ fontSize: 16, marginLeft: 10 }}>
//               : {item.website}
//             </Text>
//           </View>
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <FontAwesome5 name="map-marker-alt" style={{ fontSize: 16 }} />
//             <Text style={{ fontSize: 16, marginLeft: 10 }}>
//               : {item.address}
//             </Text>
//           </View>
//         </View>

//         <View
//           style={{
//             borderBottomWidth: 1,
//             borderBottomColor: "#787878",
//             margin: 10,
//           }}
//         />
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             marginBottom: 10,
//           }}
//         >
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               margin: 5,
//               marginHorizontal: 20,
//             }}
//           >
//             <TouchableOpacity
//               style={{ flex: 1, marginRight: 5 }}
//               onPress={() => dialCall(`${item.mobileno}`)}
//             >
//               <LinearGradient
//                 colors={["#f5548e", "#903af9"]}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 0 }}
//                 style={{
//                   padding: 10,
//                   paddingHorizontal: 25, // Adjust the padding as needed
//                   alignItems: "center",
//                   borderRadius: 7,
//                 }}
//               >
//                 <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
//                   Call
//                 </Text>
//               </LinearGradient>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{ flex: 1, marginLeft: 5 }}
//               onPress={() => dialCall(123456789)}
//             >
//               <LinearGradient
//                 colors={["#903af9", "#f5548e"]}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 0 }}
//                 style={{
//                   padding: 10,
//                   paddingHorizontal: 25, // Adjust the padding as needed
//                   alignItems: "center",
//                   borderRadius: 7,
//                 }}
//               >
//                 <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
//                   Enquiry
//                 </Text>
//               </LinearGradient>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// });

// const DetailsScreen = ({ route, navigation }) => {
//   const { category } = route.params;
//   const [listingData, setListingData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const fetchListingData = async (pageNumber) => {
//     try {
//       setLoading(true); // Set loading to true before making the API call
//       const response = await fetch(
//         `${DATABASE_URL}/api/listing/${category.id}?page=${pageNumber}`
//       );
//       const data = await response.json();

//       setListingData((prevData) => [...prevData, ...data]);
//     } catch (error) {
//       console.error("Error fetching listing data:", error);
//     } finally {
//       setLoading(false); // Set loading to false after the data is fetched or in case of an error
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetchListingData(page);
//     };

//     if (page === 1) {
//       fetchData();
//     }
//   }, [page, category.id]);

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={listingData}
//         renderItem={({ item }) => (
//           <RenderCard item={item} navigation={navigation} />
//         )}
//         keyExtractor={(item, index) => item.id + index.toString()}
//         ListHeaderComponent={<Header navigation={navigation} />}
//         onEndReached={() => {
//           setPage(page + 1);
//         }}
//         onEndReachedThreshold={0.1}
//       />

//       {loading && (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   cardContainer: {
//     backgroundColor: "#fff", // Card background color
//     borderRadius: 10, // Card border radius
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 5,
//       height: 5,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5, // for Android
//     marginVertical: 10,
//     marginHorizontal: 10,
//   },
//   cardImage: {
//     width: 300,
//     height: 150,
//     resizeMode: "stretch",
//   },
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(255, 255, 255, 0.7)", // semi-transparent white background
//   },
// });

// export default DetailsScreen;

// import { DATABASE_URL } from "@env";

import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Platform,
//   Linking,
//   FlatList,
// } from "react-native";
// import Header from "../components/Header";
// import {
//   FontAwesome5,
//   FontAwesome,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// const DetailsScreen = ({ route, navigation }) => {
//   const { category } = route.params;
//   const [listingData, setListingData] = useState([]);

//   useEffect(() => {
//     const fetchListingData = async () => {
//       try {
//         const response = await fetch(
//           `${DATABASE_URL}/api/listing/${category.id}`
//         );
//         const data = await response.json();
//         setListingData(data);
//       } catch (error) {
//         console.error("Error fetching listing data:", error);
//       }
//     };

//     fetchListingData();
//   }, [category.id]);

//   const dialCall = (number) => {
//     let phoneNumber = "";
//     if (Platform.OS === "android") {
//       phoneNumber = `tel:${number}`;
//     } else {
//       phoneNumber = `telprompt:${number}`;
//     }
//     Linking.openURL(phoneNumber);
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.card}
//       activeOpacity={0.8}
//       onPress={() => {
//         navigation.navigate("DetailedScreen", { id: item.id, mob: item.mobileno });
//         console.log(item.id);
//       }}
//     >

//     <View style={styles.cardContainer}>
//             <View
//               style={{ alignItems: "center", marginTop: 15, marginBottom: 10 }}
//             >
//               <Image
//                 source={{
//                   uri: item.logo
//                     ? `https://www.justvisitonline.com/photo/${item.logo}`
//                     : "https://www.justvisitonline.com/photo/default-logo.jpg",
//                 }}
//                 style={styles.cardImage}
//               />
//             </View>

//             <View style={{ flex: 1, overflow: "hidden", marginLeft: 20 }}>
//               <Text style={{ fontSize: 16, fontWeight: "900" }}>
//                 {item.cname}
//               </Text>

//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <FontAwesome5 name="user-alt" style={{ fontSize: 16 }} />
//                 <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                   : {item.cperson}
//                 </Text>
//               </View>
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <MaterialCommunityIcons name="star" style={{ fontSize: 16 }} />
//                 <Text style={{ fontSize: 16, marginLeft: 10 }}>:</Text>
//                 <Text
//                   style={{
//                     fontSize: 16,
//                     marginLeft: 10,
//                     backgroundColor: "yellow",
//                     padding: 5,
//                     borderRadius: 5,
//                   }}
//                 >
//                   {item.rating !== null ? item.rating + "/5" : "0/5"}
//                 </Text>
//               </View>
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <MaterialCommunityIcons name="email" style={{ fontSize: 16 }} />
//                 <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                   : {item.email}
//                 </Text>
//               </View>
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <FontAwesome name="globe" style={{ fontSize: 16 }} />
//                 <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                   : {item.website}
//                 </Text>
//               </View>
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <FontAwesome5 name="map-marker-alt" style={{ fontSize: 16 }} />
//                 <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                   : {item.address}
//                 </Text>
//               </View>
//             </View>

//             <View
//               style={{
//                 borderBottomWidth: 1,
//                 borderBottomColor: "#787878",
//                 margin: 10,
//               }}
//             />
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginBottom: 10,
//               }}
//             >
//               <View
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   margin: 5,
//                   marginHorizontal: 20,
//                 }}
//               >
//                 <TouchableOpacity
//                   style={{ flex: 1, marginRight: 5 }}
//                   onPress={() => dialCall(`${item.mobileno}`)}
//                 >
//                   <LinearGradient
//                     colors={["#f5548e", "#903af9"]}
//                     start={{ x: 0, y: 0 }}
//                     end={{ x: 1, y: 0 }}
//                     style={{
//                       padding: 10,
//                       paddingHorizontal: 25,
//                       alignItems: "center",
//                       borderRadius: 7,
//                     }}
//                   >
//                     <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
//                       Call
//                     </Text>
//                   </LinearGradient>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={{ flex: 1, marginLeft: 5 }}
//                   onPress={() => dialCall(123456789)}
//                 >
//                   <LinearGradient
//                     colors={["#903af9", "#f5548e"]}
//                     start={{ x: 0, y: 0 }}
//                     end={{ x: 1, y: 0 }}
//                     style={{
//                       padding: 10,
//                       paddingHorizontal: 25,
//                       alignItems: "center",
//                       borderRadius: 7,
//                     }}
//                   >
//                     <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
//                       Enquiry
//                     </Text>
//                   </LinearGradient>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>

//     </TouchableOpacity>
//     );

//   return (
//     <FlatList
//       data={listingData}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={renderItem}
//       ListHeaderComponent={<Header navigation={navigation} />}
//       // Other FlatList props as needed
//     />
//   );
// };

// const styles = StyleSheet.create({
//   cardContainer: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 5,
//       height: 5,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     marginVertical: 10,
//     marginHorizontal: 10,
//   },
//   cardImage: {
//     width: 300,
//     height: 150,
//     resizeMode: "stretch",
//   },
// });

// export default DetailsScreen;





import { DATABASE_URL } from "@env";

import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Linking,
  Modal,
  FlatList,
  ActivityIndicator,
} from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import EnquiryForm from "../components/EnquiryForm";

const ITEM_HEIGHT = 25;

const DetailsScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const response = await fetch(
          `${DATABASE_URL}/api/listing/${category.id}`
        );
        const data = await response.json();
        setListingData(data);
      } catch (error) {
        console.error("Error fetching listing data:", error);
        setLoading(false);
      }
    };

    fetchListingData();
  }, [category.id]);

  const fetchMoreData = useCallback(async () => {
    if (isFetchingMore || loading) {
      setLoading(false);
      
    }

    try {
      setIsFetchingMore(true);
      const response = await fetch(
        `${DATABASE_URL}/api/listing/${category.id}?page=${pageNumber + 1}`
      );
      const newData = await response.json();

      if (newData.length > 0) {
        setListingData((prevData) => [...prevData, ...newData]);
        setPageNumber((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    } finally {
      setIsFetchingMore(false);
      // Make sure not to set loading to false here, if you want to keep the loading indicator until the new data is fetched.
    }
  }, [category.id, isFetchingMore, loading, pageNumber]);

  const dialCall = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  const openEnquiryModal = useCallback(
    (item) => {
      console.log("Opening Enquiry Modal");
      if (!selectedItem) {
        setSelectedItem(item);
      }
    },
    [selectedItem]
  );

  const closeEnquiryModal = useCallback(() => {
    console.log("Closing Enquiry Modal");
    setSelectedItem(null);
  }, []);

  // const handleEndReached = useCallback(() => {
  //   if (loading) {
  //     setLoading(false);
  //     return <Text>No more Data available</Text>;
  //   }
  // }, [loading]);

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
            <Text style={{ fontSize: 16, fontWeight: "900" }}>
              {item.cname}
            </Text>

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
              <Text style={{ fontSize: 16, marginLeft: 10 }}>
                : {item.email}
              </Text>
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
                onPress={() => openEnquiryModal(item)}
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
      </TouchableOpacity>
    ),
    [navigation, openEnquiryModal]
  );

  return (
    <>
      <FlatList
        data={listingData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT,
          index,
        })}
        ListHeaderComponent={<Header navigation={navigation} />}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#000000" /> : null
        }
        onEndReached={({ distanceFromEnd }) =>
          distanceFromEnd > 25 && fetchMoreData()
        }
        onEndReachedThreshold={10}
        scrollEventThrottle={150}
      />
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!selectedItem}
          onRequestClose={closeEnquiryModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <EnquiryForm onClose={closeEnquiryModal} />
            </View>
          </View>
        </Modal>
      )}
    </>
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
  cardImage: {
    width: 300,
    height: 150,
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

export default DetailsScreen;
