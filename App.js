import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { RegistrationScren } from "./Screens/RegistrationScren/RegistrationScren";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        resizeMode="cover"
        source={require("./assets/img/photo_bg3x.jpg")}
      >
        <RegistrationScren />
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
