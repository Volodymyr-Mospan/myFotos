import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { RegistrationScren } from "./Screens/RegistrationScren/RegistrationScren";
import image1 from "./assets/img/photo_bg.jpg";
import image2 from "./assets/img/photo_bg2x.jpg";
import image3 from "./assets/img/photo_bg3x.jpg";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Alkatra-Bold": require("./assets/fonts/Alkatra-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        style={styles.bgImage}
        resizeMode="cover"
        // src={require(image1)}
        // srcSet={"./assets/img/photo_bg.jpg 1x, ./assets/img/photo_bg2x.jpg 2x"}
        // srcSet={`${image1} 1x, ${image2} 2x, ${image3} 3x`}
        source={(image1, image2, image3)}
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
    fontFamily: "Roboto-Bold",
    // fontWeight: 500,
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // resizeMode: "center",
  },
});
