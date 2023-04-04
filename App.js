import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { RegistrationScren } from "./Screens/RegistrationScren/RegistrationScren";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
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
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsShowKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.bgImage}
          resizeMode="cover"
          source={(image1, image2, image3)}
        >
          <RegistrationScren keyboardHide={keyboardHide} />
          {/* <LoginScreen keyboardHide={keyboardHide} /> */}
        </ImageBackground>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto-Bold",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // resizeMode: "center",
  },
});
