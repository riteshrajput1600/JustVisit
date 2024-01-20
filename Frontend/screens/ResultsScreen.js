// // // ResultsScreen.js

// // import React, { useState, useEffect, useCallback } from "react";
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   Image,
// //   StyleSheet,
// //   Platform,
// //   Linking,
// //   Modal,
// //   FlatList,
// //   ActivityIndicator,
// // } from "react-native";
// // import {
// //   FontAwesome5,
// //   FontAwesome,
// //   MaterialCommunityIcons,
// // } from "@expo/vector-icons";
// // import { LinearGradient } from "expo-linear-gradient";
// // import Header from "../components/Header";
// // import EnquiryForm from "../components/EnquiryForm";

// // const ITEM_HEIGHT = 25;

// // const ResultsScreen = ({ route, navigation }) => {
// //   const { searchData } = route.params; // Extract searchData from the route parameters
// //   const [pageNumber, setPageNumber] = useState(1);
// //   const [isFetchingMore, setIsFetchingMore] = useState(false);
// //   const [selectedItem, setSelectedItem] = useState(null);

// //   const fetchMoreData = useCallback(async () => {
// //     // Fetch more data logic if needed
// //   }, []);

// //   const openEnquiryModal = useCallback(
// //     (item) => {
// //       console.log(item.id, "Opening Enquiry Modal");
// //       if (!selectedItem) {
// //         setSelectedItem(item);
// //       } else {
// //         console.log("Modal is already open");
// //       }
// //     },
// //     [selectedItem]
// //   );

// //   const closeEnquiryModal = useCallback(() => {
// //     console.log("Closing Enquiry Modal");
// //     setSelectedItem(null);
// //   }, []);

// //   const renderItem = useCallback(
// //     ({ item }) => (
// //       <TouchableOpacity
// //         style={styles.card}
// //         activeOpacity={0.8}
// //         onPress={() => {
// //           navigation.navigate("DetailedScreen", {
// //             id: item.listing_id,
// //             mob: item.mobileno,
// //           });
// //           console.log("this is from ResultsScreen",item.listing_id);
// //         }}
// //       >
// //         <View style={styles.cardContainer}>
// //           <View
// //             style={{
// //               alignItems: "center",
// //               marginTop: 15,
// //               marginBottom: 10,
// //             }}
// //           >
// //             <Image
// //               source={{
// //                 uri: item.logo
// //                   ? `https://www.justvisitonline.com/photo/${item.logo}`
// //                   : "https://www.justvisitonline.com/photo/default-logo.jpg",
// //               }}
// //               style={styles.cardImage}
// //             />
// //           </View>

// //           <View style={{ flex: 1, overflow: "hidden", marginLeft: 20 }}>
// //             <Text style={{ fontSize: 16, fontWeight: "900" }}>
// //               {item.cname}
// //             </Text>

// //             <View style={{ flexDirection: "row", alignItems: "center" }}>
// //               <FontAwesome5 name="user-alt" style={{ fontSize: 16 }} />
// //               <Text style={{ fontSize: 16, marginLeft: 10 }}>
// //                 : {item.cperson}
// //               </Text>
// //             </View>
// //             <View style={{ flexDirection: "row", alignItems: "center" }}>
// //               <MaterialCommunityIcons name="star" style={{ fontSize: 16 }} />
// //               <Text style={{ fontSize: 16, marginLeft: 10 }}>:</Text>
// //               <Text
// //                 style={{
// //                   fontSize: 16,
// //                   marginLeft: 10,
// //                   backgroundColor: "yellow",
// //                   padding: 5,
// //                   borderRadius: 5,
// //                 }}
// //               >
// //                 {item.rating !== null ? item.rating + "/5" : "0/5"}
// //               </Text>
// //             </View>
// //             <View style={{ flexDirection: "row", alignItems: "center" }}>
// //               <MaterialCommunityIcons name="email" style={{ fontSize: 16 }} />
// //               <Text style={{ fontSize: 16, marginLeft: 10 }}>
// //                 : {item.email}
// //               </Text>
// //             </View>
// //             <View style={{ flexDirection: "row", alignItems: "center" }}>
// //               <FontAwesome name="globe" style={{ fontSize: 16 }} />
// //               <Text style={{ fontSize: 16, marginLeft: 10 }}>
// //                 : {item.website}
// //               </Text>
// //             </View>
// //             <View style={{ flexDirection: "row", alignItems: "center" }}>
// //               <FontAwesome5 name="map-marker-alt" style={{ fontSize: 16 }} />
// //               <Text style={{ fontSize: 16, marginLeft: 10 }}>
// //                 : {item.address}
// //               </Text>
// //             </View>
// //           </View>

// //           <View
// //             style={{
// //               borderBottomWidth: 1,
// //               borderBottomColor: "#787878",
// //               margin: 10,
// //             }}
// //           />
// //           <View
// //             style={{
// //               flexDirection: "row",
// //               alignItems: "center",
// //               marginBottom: 10,
// //             }}
// //           >
// //             <View
// //               style={{
// //                 flexDirection: "row",
// //                 alignItems: "center",
// //                 margin: 5,
// //                 marginHorizontal: 20,
// //               }}
// //             >
// //               <TouchableOpacity
// //                 style={{ flex: 1, marginRight: 5 }}
// //                 onPress={() => dialCall(`${item.mobileno}`)}
// //               >
// //                 <LinearGradient
// //                   colors={["#f5548e", "#903af9"]}
// //                   start={{ x: 0, y: 0 }}
// //                   end={{ x: 1, y: 0 }}
// //                   style={{
// //                     padding: 10,
// //                     paddingHorizontal: 25,
// //                     alignItems: "center",
// //                     borderRadius: 7,
// //                   }}
// //                 >
// //                   <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
// //                     Call
// //                   </Text>
// //                 </LinearGradient>
// //               </TouchableOpacity>
// //               <TouchableOpacity
// //                 style={{ flex: 1, marginLeft: 5 }}
// //                 onPress={() => openEnquiryModal(item)}
// //               >
// //                 <LinearGradient
// //                   colors={["#903af9", "#f5548e"]}
// //                   start={{ x: 0, y: 0 }}
// //                   end={{ x: 1, y: 0 }}
// //                   style={{
// //                     padding: 10,
// //                     paddingHorizontal: 25,
// //                     alignItems: "center",
// //                     borderRadius: 7,
// //                   }}
// //                 >
// //                   <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
// //                     Enquiry
// //                   </Text>
// //                 </LinearGradient>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </View>
// //       </TouchableOpacity>
// //     ),
// //     [navigation, openEnquiryModal]
// //   );

// //   return (
// //     <>
// //       <FlatList
// //         data={searchData}
// //         keyExtractor={(item, index) => index.toString()} // Use the index as a fallback key if id is not available
// //         renderItem={renderItem}
// //         getItemLayout={(data, index) => ({
// //           length: ITEM_HEIGHT,
// //           offset: ITEM_HEIGHT * index,
// //           index,
// //         })}
// //         ListHeaderComponent={<Header navigation={navigation} />}
// //         ListFooterComponent={
// //           isFetchingMore ? (
// //             <ActivityIndicator size="large" color="#000000" />
// //           ) : null
// //         }
// //         onEndReachedThreshold={0.1}
// //         onEndReached={fetchMoreData}
// //         scrollEventThrottle={150}
// //       />

// //       {selectedItem && (
// //         <Modal
// //           animationType="slide"
// //           transparent={true}
// //           visible={!!selectedItem}
// //           onRequestClose={closeEnquiryModal}
// //         >
// //           <View style={styles.modalContainer}>
// //             <View style={styles.modalContent}>
// //               <EnquiryForm onClose={closeEnquiryModal} />
// //             </View>
// //           </View>
// //         </Modal>
// //       )}
// //     </>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   cardContainer: {
// //     backgroundColor: "#fff",
// //     borderRadius: 10,
// //     shadowColor: "#000",
// //     shadowOffset: {
// //       width: 5,
// //       height: 5,
// //     },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 3.84,
// //     elevation: 5,
// //     marginVertical: 10,
// //     marginHorizontal: 10,
// //   },
// //   cardImage: {
// //     width: 300,
// //     height: 150,
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "rgba(0, 0, 0, 0.5)",
// //   },
// //   modalContent: {
// //     backgroundColor: "#fff",
// //     padding: 20,
// //     borderRadius: 10,
// //     width: "80%",
// //   },
// // });

// // export default ResultsScreen;










// // ResultsScreen.js

// import React, { useState, useEffect, useCallback } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Platform,
//   Linking,
//   Modal,
//   FlatList,
//   ActivityIndicator,
// } from "react-native";
// import {
//   FontAwesome5,
//   FontAwesome,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
// import Header from "../components/Header";
// import EnquiryForm from "../components/EnquiryForm";

// const ITEM_HEIGHT = 25;

// const ResultsScreen = ({ route, navigation }) => {
//   const { searchData } = route.params;
//   const [pageNumber, setPageNumber] = useState(1);
//   const [isFetchingMore, setIsFetchingMore] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const pageSize = 15;

//   const fetchMoreData = useCallback(async () => {
//     try {
//       setIsFetchingMore(true);
//       // Replace the following line with your actual API call to fetch data for the current page
//       // Example: const newData = await fetchData(pageNumber);
//       const newData = []; // Replace this line with your actual data fetching logic

//       // Update the state with the new data
//       // If newData is an array of items, concatenate it with the existing searchData
//       // Otherwise, update the searchData directly based on your API response structure
//       // Example: setSearchData((prevData) => [...prevData, ...newData]);
//       setSearchData((prevData) => [...prevData, ...newData]);

//       setPageNumber((prevPage) => prevPage + 1);
//     } catch (error) {
//       console.error("Error fetching more data:", error);
//     } finally {
//       setIsFetchingMore(false);
//     }
//   }, []);

//   const openEnquiryModal = useCallback(
//     (item) => {
//       console.log(item.id, "Opening Enquiry Modal");
//       if (!selectedItem) {
//         setSelectedItem(item);
//       } else {
//         console.log("Modal is already open");
//       }
//     },
//     [selectedItem]
//   );

//   const closeEnquiryModal = useCallback(() => {
//     console.log("Closing Enquiry Modal");
//     setSelectedItem(null);
//   }, []);

//   const renderItem = useCallback(
//     ({ item }) => (

//         <TouchableOpacity
//         style={styles.card}
//         activeOpacity={0.8}
//         onPress={() => {
//           navigation.navigate("DetailedScreen", {
//             id: item.listing_id,
//             mob: item.mobileno,
//           });
//           console.log("this is from ResultsScreen",item.listing_id);
//         }}
//       >
//         <View style={styles.cardContainer}>
//           <View
//             style={{
//               alignItems: "center",
//               marginTop: 15,
//               marginBottom: 10,
//             }}
//           >
//             <Image
//               source={{
//                 uri: item.logo
//                   ? `https://www.justvisitonline.com/photo/${item.logo}`
//                   : "https://www.justvisitonline.com/photo/default-logo.jpg",
//               }}
//               style={styles.cardImage}
//             />
//           </View>

//           <View style={{ flex: 1, overflow: "hidden", marginLeft: 20 }}>
//             <Text style={{ fontSize: 16, fontWeight: "900" }}>
//               {item.cname}
//             </Text>

//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <FontAwesome5 name="user-alt" style={{ fontSize: 16 }} />
//               <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                 : {item.cperson}
//               </Text>
//             </View>
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <MaterialCommunityIcons name="star" style={{ fontSize: 16 }} />
//               <Text style={{ fontSize: 16, marginLeft: 10 }}>:</Text>
//               <Text
//                 style={{
//                   fontSize: 16,
//                   marginLeft: 10,
//                   backgroundColor: "yellow",
//                   padding: 5,
//                   borderRadius: 5,
//                 }}
//               >
//                 {item.rating !== null ? item.rating + "/5" : "0/5"}
//               </Text>
//             </View>
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <MaterialCommunityIcons name="email" style={{ fontSize: 16 }} />
//               <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                 : {item.email}
//               </Text>
//             </View>
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <FontAwesome name="globe" style={{ fontSize: 16 }} />
//               <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                 : {item.website}
//               </Text>
//             </View>
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <FontAwesome5 name="map-marker-alt" style={{ fontSize: 16 }} />
//               <Text style={{ fontSize: 16, marginLeft: 10 }}>
//                 : {item.address}
//               </Text>
//             </View>
//           </View>

//           <View
//             style={{
//               borderBottomWidth: 1,
//               borderBottomColor: "#787878",
//               margin: 10,
//             }}
//           />
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               marginBottom: 10,
//             }}
//           >
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 margin: 5,
//                 marginHorizontal: 20,
//               }}
//             >
//               <TouchableOpacity
//                 style={{ flex: 1, marginRight: 5 }}
//                 onPress={() => dialCall(`${item.mobileno}`)}
//               >
//                 <LinearGradient
//                   colors={["#f5548e", "#903af9"]}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                   style={{
//                     padding: 10,
//                     paddingHorizontal: 25,
//                     alignItems: "center",
//                     borderRadius: 7,
//                   }}
//                 >
//                   <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
//                     Call
//                   </Text>
//                 </LinearGradient>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{ flex: 1, marginLeft: 5 }}
//                 onPress={() => openEnquiryModal(item)}
//               >
//                 <LinearGradient
//                   colors={["#903af9", "#f5548e"]}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                   style={{
//                     padding: 10,
//                     paddingHorizontal: 25,
//                     alignItems: "center",
//                     borderRadius: 7,
//                   }}
//                 >
//                   <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
//                     Enquiry
//                   </Text>
//                 </LinearGradient>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>
      
//     ),
//     [navigation, openEnquiryModal]
//   );

//   return (
//     <>
//       <FlatList
//         data={searchData}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderItem}
//         getItemLayout={(data, index) => ({
//           length: ITEM_HEIGHT,
//           offset: ITEM_HEIGHT * index,
//           index,
//         })}
//         ListHeaderComponent={<Header navigation={navigation} />}
//         ListFooterComponent={
//           isFetchingMore ? (
//             <ActivityIndicator size="large" color="#000000" />
//           ) : null
//         }
//         onEndReachedThreshold={0.1}
//         onEndReached={fetchMoreData}
//         scrollEventThrottle={150}
//       />

//       {selectedItem && (
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={!!selectedItem}
//           onRequestClose={closeEnquiryModal}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <EnquiryForm onClose={closeEnquiryModal} />
//             </View>
//           </View>
//         </Modal>
//       )}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   // Your existing styles

//     cardContainer: {
//       backgroundColor: "#fff",
//       borderRadius: 10,
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 5,
//         height: 5,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       elevation: 5,
//       marginVertical: 10,
//       marginHorizontal: 10,
//     },
//     cardImage: {
//       width: 300,
//       height: 150,
//     },
//     modalContainer: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "rgba(0, 0, 0, 0.5)",
//     },
//     modalContent: {
//       backgroundColor: "#fff",
//       padding: 20,
//       borderRadius: 10,
//       width: "80%",
//     },
// });



// export default ResultsScreen;





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

const ResultsScreen = ({ route, navigation }) => {
  const { id } = route.params;
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
          `${DATABASE_URL}/api/listing/${id}`
        );
        const data = await response.json();
        setListingData(data);
      } catch (error) {
        console.error("Error fetching listing data:", error);
        setLoading(false);
      }
    };

    fetchListingData();
  }, [id]);

  const fetchMoreData = useCallback(async () => {
    if (isFetchingMore || loading) {
      setLoading(false);
      return;
    }

    try {
      setIsFetchingMore(true);
      const response = await fetch(
        `${DATABASE_URL}/api/listing/${id}?page=${pageNumber + 1}`
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
  }, [id, isFetchingMore, loading, pageNumber]);

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
      console.log(item.id,"Opening Enquiry Modal");
      if (!selectedItem) {
        setSelectedItem(item);
      } else {
        console.log("Modal is already open");
      }
    },
    [selectedItem]
  );

  const closeEnquiryModal = useCallback(() => {
    console.log("Closing Enquiry Modal");
    setSelectedItem(null);
  }, []);


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
          console.log("this is id from details page going to detailed page",item.id);
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

export default ResultsScreen;
