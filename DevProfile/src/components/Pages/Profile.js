import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Text style={styles.profileText}>Profile</Text>
      </View>

      {/* Profile Picture and Info */}
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg",
          }} // Replace with actual image URL
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>Joana Eve Razon</Text>
        <Text style={styles.roleText}>Senior Web Developer</Text>
      </View>

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
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Settings</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  scrollViewContainer: {
    alignItems: "center",
  },
  header: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  profileText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
    color: "#8E8E8E",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
    color: "#fff",
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
    color: "#fff",
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
    color: "#fff",
  },
  versionText: {
    fontSize: 12,
    color: "#D1D1D1",
    marginTop: 110,
  },
});

export default Profile;
