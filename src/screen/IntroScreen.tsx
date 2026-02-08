import { View, Text, StyleSheet, Image } from "react-native";
// import BedSvg from "../assets/BedSvg";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/travel-icon.png")}
        style={styles.logo}
      />
      {/* <BedSvg width={32} height={32} /> */}
      <Text style={styles.title}>TOUR WITH US</Text>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
