// HomeScreen.js
import { DATABASE_URL } from "@env";

import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import Header from "../../components/Header";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const AboutScreen = ({ navigation }) => {
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
          About Just Visit Online
        </Text>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#787878",
            marginHorizontal: 20,
            marginBottom: 20,
          }}
        />

        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/category/category/about-img1.png")}
            style={styles.image}
          />
        </View>

        <Text
          style={{
            fontSize: 16,
            paddingBottom: 10,
            paddingHorizontal: 20,
            color: "#787878",
            lineHeight: 24,
            textAlign: "justify",
          }}
        >
          Just Visit Online business directories are here to stay, and every
          business should know where they need to be listed. Creating local
          business listings is the main work of any local business marketing
          campaign. Local Business Listings give more visibility for your
          business, and every new listing that you create enhances your chances
          of being found online by customers. If your business is visible
          online, search engines trust the accuracy of your business data, and
          thus, your chances of ranking on top for local searches shoot up. To
          simplify it all, business listings can be considered as an online
          version of business information in Just Visit Online.
        </Text>

        <Text
          style={{
            fontSize: 16,
            padding: 10,
            paddingHorizontal: 20,
            color: "#787878",
            lineHeight: 24,
            textAlign: "justify",
          }}
        >
          A business directory is a website that indexes businesses based on
          their industry niche, location, or category, similar to the Yellow
          Pages. Within the list, you’ll have the business Name, Address, and
          Phone number (known as NAP), along with a link back to the business
          website. Just Visit Online gives a 360-degree platform to list all
          your contents in one place for your customers. Having all contents
          about your business in one place helps internet search rankings.
        </Text>

        <Text
          style={{
            fontSize: 16,
            paddingBottom: 10,
            paddingHorizontal: 20,
            color: "#787878",
            lineHeight: 24,
            textAlign: "justify",
          }}
        >
          India's fastest growing local search engine, Just Visit Online Pvt.
          Ltd. Business Directory, promotes businesses and provides
          comprehensive business information in Agra, Ajmer, Aligarh, Allahabad,
          Alwar, Ambala, Arrah, Asansol, Bareilly, Begusarai, Bhagalpur,
          Bharatpur, Bhilwara, Bhopal, Biharsharif, Bikaner, Bokaro, Danapur,
          Darbhanga, Darjeeling, Delhi, Deoghar, Dewas, Dhanbad, Durgapur,
          Faridabad, Gaya, Ghaziabad, Gurgaon, Gwalior, Hajipur, Hisar, Howrah,
          Indore, Jabalpur, Jaipur, Jamshedpur, Jodhpur, Kanpur, Karnal,
          Katihar, Kolkata, Kota, Kurukshetra, Lucknow, Meerut, Mumbai,
          Muzaffarpur, Noida, Panipat, Patna, Pune, Purnia, Ranchi, Ratlam,
          Rewa, Rewari, Sagar, Satna, Sonipat, Sriganganagar, Surat, Udaipur,
          Ujjain, Varanasi, Yamunanagar, and in your locality, making local
          address search more convenient for all B2B and B2C services across
          India.
        </Text>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "900",
            padding: 15,
            paddingBottom: 20,
          }}
        >
          MISSION
        </Text>

        <Text
          style={{
            fontSize: 16,
            paddingBottom: 10,
            paddingHorizontal: 20,
            color: "#787878",
            lineHeight: 24,
            textAlign: "justify",
          }}
        >
          To provide fast, free, reliable, and comprehensive information to our
          users and enable discovery and transactions for all products and
          services. The company's operations began in 2013 with offering local
          search services under the JUSTVISITONLINE.COM brand, which is now the
          leading local search engine in PATNA. The mission statement for
          JUSTVISITONLINE.COM is a public document that details the values and
          strategic aims of JUSTVISITONLINE.COM and the other statement of
          JUSTVISITONLINE.COM also identifies the purpose of the organization's
          existence, highlighting the services and the products it offers.
          Further, the mission statement also identifies the organization’s
          operational goals for JUSTVISITONLINE.COM, the processes the company
          uses to achieve those, the target customer groups, and the region
          where the company operates.
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "900",

            padding: 15,
            paddingBottom: 20,
          }}
        >
          VISSION
        </Text>

        <Text
          style={{
            fontSize: 16,
            paddingBottom: 10,
            paddingHorizontal: 20,
            color: "#787878",
            lineHeight: 24,
            textAlign: "justify",
          }}
        >
          The vision statement for JUSTVISITONLINE.COM is its strategic plan for
          the future – it defines what and where JUSTVISITONLINE.COM Company
          wants to be in the future. The vision statement for
          JUSTVISITONLINE.COM is a document identifying the goals of
          JUSTVISITONLINE.COM to facilitate its strategic, managerial, as well
          as general decision-making processes.
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "900",

            padding: 15,
            paddingBottom: 20,
          }}
        >
          GOALS OF THE COMPANY
        </Text>

        <Text
          style={{
            fontSize: 16,
            paddingBottom: 10,
            paddingHorizontal: 20,
            color: "#787878",
            lineHeight: 24,
            textAlign: "justify",
          }}
        >
          Organizational goals are those business and strategic objectives that
          define the purpose of JUSTVISITONLINE.COM. Organizational goals are
          strategic targets that JUSTVISITONLINE.COM wants to achieve over a
          period of time. This time period is generally long term. The goals of
          JUSTVISITONLINE.COM help direct its employee behavior, as well as help
          in directing the operations of the business in the short term.
        </Text>

        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#787878",
            marginHorizontal: 20,
            marginBottom: 20,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "900",
              textAlign: "center",
              paddingTop: 5,
              paddingBottom: 10,
            }}
          >
            Why List on Just Visit Online
          </Text>
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="numeric-1"
              size={33}
              color="#111"
              style={{
                borderWidth: 1,
                borderColor: "#e3e6ef",
                borderRadius: 20,
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#111",
                paddingLeft: 20,
              }}
            >
              Easy Registration
            </Text>
          </View>
          <Text style={{ fontSize: 14, color: "#111", paddingLeft: 55 }}>
            Easy Registration Forms allows you to create powerful User
            Registration Forms.
          </Text>
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="numeric-2"
              size={33}
              color="#111"
              style={{
                borderWidth: 1,
                borderColor: "#e3e6ef",
                borderRadius: 20,
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#111",
                paddingLeft: 20,
              }}
            >
              Promote your Listing
            </Text>
          </View>
          <Text style={{ fontSize: 14, color: "#111", paddingLeft: 55 }}>
            Promoting your listings to help them sell faster starts with great
            photography, because first impressions make second impressions
            possible.
          </Text>
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="numeric-3"
              size={33}
              color="#111"
              style={{
                borderWidth: 1,
                borderColor: "#e3e6ef",
                borderRadius: 20,
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#111",
                paddingLeft: 20,
              }}
            >
              Great Sales Benefits
            </Text>
          </View>
          <Text style={{ fontSize: 14, color: "#111", paddingLeft: 55 }}>
            Enjoy the company of the people you do business with and make them
            feel important.
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/category/category/about-img2.png")}
            style={styles.image}
          />
        </View>
        <LinearGradient
          colors={["#f5548e", "#fa8b0c"]}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: "#111",
              textAlign: "center",
            }}
          >
            Millions of People
          </Text>

          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              paddingTop: 15,
              padding: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Turn to Directoria every day to make spending decisions
          </Text>
          <View style={{ paddingTop: 15 }}>
            <Text
              style={{
                fontSize: 24,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              59k+
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                textAlign: "center",
              }}
            >
              Listings
            </Text>
          </View>
          <View style={{ paddingTop: 30 }}>
            <Text
              style={{
                fontSize: 24,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              23k+
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                textAlign: "center",
              }}
            >
              Verified Users
            </Text>
          </View>
          <View style={{ paddingTop: 30 }}>
            <Text
              style={{
                fontSize: 24,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              5k+
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                textAlign: "center",
              }}
            >
              New users per month
            </Text>
          </View>
          <View style={{ paddingTop: 30 }}>
            <Text
              style={{
                fontSize: 24,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              42k+
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                textAlign: "center",
              }}
            >
              Visitors per month
            </Text>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    width: "100%",
    height: 500,
    justifyContent: "center", // Adjust as needed based on your layout
    alignItems: "center", // Adjust as needed based on your layout
  },
});

export default AboutScreen;
