import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";
export default function BackButton() {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Entypo name="chevron-left" size={s(16)} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {},
  buttonContainer: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F4",
  },
});
