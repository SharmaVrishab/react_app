import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "./UserAvatar";
import BackButton from "./BackButton";
import { s, vs } from "react-native-size-matters";

export default function ContactUsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.headingText}>CONTACT US</Text>
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
});
