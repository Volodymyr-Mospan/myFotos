import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RegistrationScren } from "./Screens/auth/RegistrationScren";
import { LoginScreen } from "./Screens/auth/LoginScreen";
import { PostsScreen } from "./Screens/mainScreen/PostsScreen";
import { CreatePostsScreen } from "./Screens/mainScreen/CreatePostsScreen";
import { ProfileScreen } from "./Screens/mainScreen/ProfileScreen";

SplashScreen.preventAutoHideAsync();

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Alkatra-Bold": require("./assets/fonts/Alkatra-Bold.ttf"),
  });
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

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
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          {isAuth ? (
            <MainTab.Navigator>
              <MainTab.Screen
                options={{ headerShown: false }}
                name="Posts"
                component={PostsScreen}
              />
              <MainTab.Screen
                options={{ headerShown: false }}
                name="CreatePosts"
                component={CreatePostsScreen}
              />
              <MainTab.Screen
                options={{ headerShown: false }}
                name="Profile"
                component={ProfileScreen}
              />
            </MainTab.Navigator>
          ) : (
            <AuthStack.Navigator initialRouteName={"Registration"}>
              <AuthStack.Screen
                options={{ headerShown: false }}
                name="Registration"
              >
                {(props) => (
                  <RegistrationScren {...props} keyboardHide={keyboardHide} />
                )}
              </AuthStack.Screen>
              <AuthStack.Screen options={{ headerShown: false }} name="Login">
                {(props) => (
                  <LoginScreen {...props} keyboardHide={keyboardHide} />
                )}
              </AuthStack.Screen>
            </AuthStack.Navigator>
          )}
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto-Bold",
    justifyContent: "flex-end",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // resizeMode: "center",
  },
});

{
  /* <TouchableWithoutFeedback onPress={keyboardHide}>
  <View style={styles.container} onLayout={onLayoutRootView}>
    <AuthStack.Navigator initialRouteName={"Registration"}>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Registration"
      >
        {(props) => (
          <RegistrationScren {...props} keyboardHide={keyboardHide} />
        )}
      </AuthStack.Screen>
      <AuthStack.Screen options={{ headerShown: false }} name="Login">
        {(props) => (
          <LoginScreen {...props} keyboardHide={keyboardHide} />
        )}
      </AuthStack.Screen>
    </AuthStack.Navigator>
  </View>
</TouchableWithoutFeedback>
<StatusBar style="auto" /> */
}
