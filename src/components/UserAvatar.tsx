import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
export default function UserAvatar() {
  return (
    <View>
      <Image
        source={{ uri: "https://picsum.photos/id/237/200/300" }}
        style={styles.AvatarImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  AvatarImage: {
    height: s(46),
    width: s(46),
    borderRadius: s(40),
    marginBottom: 20,
  },
});
