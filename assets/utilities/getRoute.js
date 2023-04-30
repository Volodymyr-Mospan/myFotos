import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostsScreen } from "../../Screens/mainScreen/PostsScreen";
import { CreatePostsScreen } from "../../Screens/mainScreen/CreatePostsScreen";
import { ProfileScreen } from "../../Screens/mainScreen/ProfileScreen";
import { RegistrationScren } from "../../Screens/auth/RegistrationScren";
import { LoginScreen } from "../../Screens/auth/LoginScreen";
import { Button, StyleSheet } from "react-native";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const getRoute = (isAuth, user, keyboardHide, setIsAuth, setUser) => {
  if (isAuth) {
    return (
      <MainTab.Navigator>
        <MainTab.Screen
          options={{
            title: "Posts",
            headerStyle: styles.headerScreen,
            headerTitleAlign: "center",
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Press me"
                color="#000"
              />
            ),
          }}
          name="Posts"
          component={PostsScreen}
          initialParams={{ user }}
        />
        <MainTab.Screen
          options={{
            title: "Create Posts",
            headerStyle: styles.headerScreen,
            headerTitleAlign: "center",
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Press me"
                color="#000"
              />
            ),
          }}
          name="CreatePosts"
          component={CreatePostsScreen}
        />
        <MainTab.Screen
          options={{
            headerShown: false,
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </MainTab.Navigator>
    );
  } else {
    return (
      <AuthStack.Navigator initialRouteName={"Registration"}>
        <AuthStack.Screen options={{ headerShown: false }} name="Registration">
          {(props) => (
            <RegistrationScren
              {...props}
              keyboardHide={keyboardHide}
              setIsAuth={setIsAuth}
              setUser={setUser}
            />
          )}
        </AuthStack.Screen>
        <AuthStack.Screen options={{ headerShown: false }} name="Login">
          {(props) => (
            <LoginScreen
              {...props}
              keyboardHide={keyboardHide}
              setIsAuth={setIsAuth}
              setUser={setUser}
            />
          )}
        </AuthStack.Screen>
      </AuthStack.Navigator>
    );
  }
};

const styles = StyleSheet.create({
  headerScreen: {
    backgroundColor: "#FFFFFF",
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderBottomWidth: 0.5,
  },
});
