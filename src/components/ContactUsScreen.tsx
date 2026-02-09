import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "./UserAvatar";
import BackButton from "./BackButton";
import { s, vs } from "react-native-size-matters";
import SocialSelection from "./SocialSelection";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function ContactUsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.screenTitle}>CONTACT US</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>SOCIAL MEDIA PLATFORM</Text>
        <SocialSelection
          title={"Whatsapp"}
          Icon={<FontAwesome name="whatsapp" size={24} color="black" />}
        />
        <SocialSelection
          title={"Instagram"}
          Icon={<Entypo name="instagram" size={24} color="black" />}
        />
        <SocialSelection
          title={"youtube"}
          Icon={<AntDesign name="youtube" size={24} color="black" />}
        />
        <SocialSelection
          title={"X"}
          Icon={<AntDesign name="x" size={24} color="black" />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: vs(35),
    paddingHorizontal: 17,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: vs(24),
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  screenTitle: {
    fontSize: s(25),
    fontWeight: "semibold",
    marginTop: vs(18),
    marginStart: s(18),
  },
  socialContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(10),
    marginTop: vs(22),
  },
  socialTitle: {
    fontSize: s(16),
    fontWeight: "semibold",
  },
});
