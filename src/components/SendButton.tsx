import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import { SendButton_Icon } from "../assets/SocialMediaIcons";

export default function SendButton() {
  return (
    <TouchableOpacity style={styles.circle}>
      <SendButton_Icon width={20} height={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circle: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#1077af",
    justifyContent: "center",
  },
});
