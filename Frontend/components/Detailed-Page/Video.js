// import { DATABASE_URL } from "@env";

// import React, { useState, useRef } from "react";
// import { View, Alert, StyleSheet } from 'react-native';
// import YoutubePlayer from 'react-native-youtube-iframe';
// import { Icon } from 'react-native-elements';

// const Video = () => {
//   const [playing, setPlaying] = useState(false);
//   const [isMute, setMute] = useState(false);
//   const controlRef = useRef();

//   const onStateChange = (state) => {
//     if (state === 'ended') {
//       setPlaying(false);
//       Alert.alert('Video has finished playing!');
//     }
//     if (state !== 'playing') {
//       setPlaying(false);
//     }
//   };

//   const togglePlaying = () => {
//     setPlaying((prev) => !prev);
//   };

//   const seekBackAndForth = (control) => {
//     controlRef.current?.getCurrentTime().then((currentTime) => {
//       control === 'forward'
//         ? controlRef.current?.seekTo(currentTime + 15, true)
//         : controlRef.current?.seekTo(currentTime - 15, true);
//     });
//   };

//   const muteVideo = () => setMute(!isMute);

//   const ControlIcon = ({ name, onPress }) => (
//     <Icon onPress={onPress} name={name} size={40} color="#fff" />
//   );

//   return (
//     <View style={styles.container}>
//       <YoutubePlayer
//         height={300}
//         ref={controlRef}
//         play={playing}
//         mute={isMute}
//         videoId={'84WIaK3bl_s'}
//         onChangeState={onStateChange}
//       />
//       <View style={styles.controlContainer}>
//         <ControlIcon onPress={() => seekBackAndForth('rewind')} name="skip-previous" />
//         <ControlIcon onPress={togglePlaying} name={playing ? 'pause' : 'play-arrow'} />
//         <ControlIcon onPress={() => seekBackAndForth('forward')} name="skip-next" />
//       </View>
//       <ControlIcon onPress={muteVideo} name={isMute ? 'volume-up' : 'volume-off'} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'darkblue',
//   },
//   controlContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
// });

// export default Video;

import { DATABASE_URL } from "@env";

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  BackHandler,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Video = ({ route, navigation }) => {
  const { id } = route?.params || {};
  const [listingData, setListingData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const response = await fetch(`${DATABASE_URL}/api/gallery/${id}`);
        const data = await response.json();
        setListingData(data);
      } catch (error) {
        console.error("Error fetching listing data:", error);
      }
    };

    fetchListingData();

    const backHandler = BackHandler.addEventListener(
      "haGalleryrdwareBackPress",
      handleBackPress
    );

    return () => {
      backHandler.remove();
    };
  }, [id]);

  const handleBackPress = () => {
    if (modalVisible) {
      setModalVisible(false);
      return true;
    }
    return false;
  };

  // Function to chunk the array into pairs
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    // Check if the last row exists and has only one item
    const lastRow = result[result.length - 1];
    if (lastRow && lastRow.length === 1) {
      lastRow.push(null); // Add a null item to make it a pair
    }
    return result;
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <View style={{ margin: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons
              name="video-collection"
              size={16}
              color="#111"
              style={{
                marginRight: 2,
              }}
            />
            <Text>Videos</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
              margin: 10,
            }}
          />

          {chunkArray(listingData, 2).map((pair, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {pair.map((items, colIndex) => (
                <TouchableOpacity
                  key={colIndex}
                  style={{
                    margin: 2,
                    width: "50%",
                  }}
                  onPress={() => items && handleImageClick(items.video_url)}
                >
                  {items && items.video_url && (
                    <Image
                      source={{
                        uri: `https://www.justvisitonline.com/photo/${items.video_url}`,
                      }}
                      style={styles.cardImage}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {/* Modal for displaying the selected image */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={{
                uri: `https://www.justvisitonline.com/photo/${selectedImage}`,
              }}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
            <TouchableOpacity
              style={{ position: "absolute", top: 20, left: 20 }}
              onPress={handleCloseModal}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
});

export default Video;
