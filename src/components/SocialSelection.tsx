import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SendButton from "./SendButton";
import SocialCircle from "./SocialCircle";
import { s, vs } from "react-native-size-matters";

const SocialSelection = ({ title, Icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>{Icon}</View>
      <Text style={styles.text}>{title}</Text>
      <SendButton />
    </View>
  );
};

export default SocialSelection;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: vs(14),
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6E8",
  },
  text: {
    marginStart: s(14),
    marginBottom: s(14),
    fontSize: s(12),
    color: "#8083a3",
    flex: 1,
  },
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
