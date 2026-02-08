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
    height: s(32),
    width: s(32),
    borderRadius: s(16),
    marginBottom: 20,
  },
});
