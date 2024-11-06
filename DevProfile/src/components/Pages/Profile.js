import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* Banner Image */}
      <ImageBackground
        source={{
          uri: "https://jooinn.com/images/nature-background-24.jpg",
        }}
        style={styles.bannerImage}
      >
        {/* Profile Picture */}
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.nameText}>Joana Eve Razon</Text>
          <Text style={styles.roleText}>Senior Web Developer</Text>
        </View>
      </ImageBackground>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>100</Text>
          <Text style={styles.statLabel}>Apps Deployed</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>100</Text>
          <Text style={styles.statLabel}>Clients Satisfied</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>20</Text>
          <Text style={styles.statLabel}>Experience in Years</Text>
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          <AntDesign name="edit" size={24} color="white" />
          Edit Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          <AntDesign name="notification" size={24} color="white" />
          Notifications
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          <Feather name="settings" size={24} color="white" />
          Settings
        </Text>
      </TouchableOpacity>

      {/* Newsletter Subscription */}
      <View style={styles.newsletterContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter email for newsletter"
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>

      {/* Version */}
      <Text style={styles.versionText}>All Rights Reserved (2024).</Text>

      {/* Instagram Icon */}
      <TouchableOpacity style={styles.instagramIcon}>
        <AntDesign name="instagram" size={24} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: "center",
    paddingBottom: 60, // Space for the Instagram icon
  },
  bannerImage: {
    width: "100%",
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
    marginTop: 150,
    backgroundColor: "#ff6b6b",
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
  roleText: {
    fontSize: 16,
    color: "#E1E1E1",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 110,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    fontSize: 14,
    color: "#8E8E8E",
  },
  button: {
    backgroundColor: "#8E44AD",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  newsletterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  subscribeButton: {
    backgroundColor: "#8E44AD",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  subscribeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  versionText: {
    fontSize: 12,
    color: "#D1D1D1",
    marginTop: 40,
  },
  instagramIcon: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#8E44AD",
    padding: 12,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
