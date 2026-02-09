import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import { TwitterIcon } from "../assets/SocialMediaIcons";

export default function SocialCircle() {
  return (
    <View style={styles.circle}>
      {/* <TwitterIcon width={20} height={20} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: s(1),
    justifyContent: "center",
  },
});
