import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
} from "react-native";
import IconButton from "../../components/IconButton/IconButton";
import image1 from "../../assets/img/photo_bg.jpg";
import image2 from "../../assets/img/photo_bg2x.jpg";
import image3 from "../../assets/img/photo_bg3x.jpg";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation, keyboardHide, setIsAuth }) => {
  const [credentials, setСredentials] = useState(initialState);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const showPasswordToggle = () => {
    setIsPasswordHidden((prevState) => !prevState);
  };

  const handleSubmit = () => {
    keyboardHide();
    console.log(credentials);
    setIsAuth(true);
    setUser(credentials);
    setСredentials(initialState);
  };

  return (
    <ImageBackground
      style={styles.bgImage}
      resizeMode="cover"
      source={(image1, image2, image3)}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign in</Text>

        <ScrollView style={{ width: "100%" }}>
          <View style={styles.form}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.form}
            >
              <TextInput
                style={styles.input}
                autoComplete="email"
                placeholder="Email address"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={credentials.email}
                onChangeText={(value) =>
                  setСredentials((prevState) => ({
                    ...prevState,
                    email: value,
                  }))
                }
              />
              <View
                style={{
                  marginBottom: 36,
                  position: "relative",
                }}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    marginBottom: 0,
                  }}
                  placeholder="Password"
                  textContentType="password"
                  secureTextEntry={!!isPasswordHidden}
                  value={credentials.password}
                  onChangeText={(value) =>
                    setСredentials((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                />

                <TouchableOpacity
                  activeOpacity={0.2}
                  style={styles.showButton}
                  onPress={showPasswordToggle}
                >
                  <Text style={styles.showButtonText}>
                    {isPasswordHidden ? "Show" : "Hide"}
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.formButton}
              onPress={handleSubmit}
            >
              <Text style={styles.formButtonText}>LogIn</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.changeFormButton}
            onPress={() => navigation.navigate("Registration")}
          >
            <Text style={styles.changeFormButtonText}>
              Don't have an account? Register
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    position: "relative",
    width: "100%",

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    marginTop: 60,
    justifyContent: "flex-end",
    alignItems: "center",

    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    paddingBottom: 32,

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35.16,
    letterSpacing: 0.01,
  },

  form: {
    width: "100%",
    justifyContent: "flex-end",
  },
  input: {
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 16,

    // textAlign: "center",
    verticalAlign: "middle",

    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },

  showButton: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  showButtonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },

  formButton: {
    height: 51,
    marginBottom: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,

    justifyContent: "center",
    alignItems: "center",
  },
  formButtonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#FFFFFF",
  },

  changeFormButton: {
    marginBottom: 78,
  },
  changeFormButtonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",
  },
});
