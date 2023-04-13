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
  TouchableWithoutFeedback,
} from "react-native";
import IconButton from "../../components/IconButton/IconButton";
import image1 from "../../assets/img/photo_bg.jpg";
import image2 from "../../assets/img/photo_bg2x.jpg";
import image3 from "../../assets/img/photo_bg3x.jpg";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScren = ({ keyboardHide, navigation }) => {
  const [credentials, setСredentials] = useState(initialState);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const showPasswordToggle = () => {
    setIsPasswordHidden((prevState) => !prevState);
  };

  const handleSubmit = () => {
    console.log(credentials);
    setСredentials(initialState);
    keyboardHide();
  };

  return (
    <ImageBackground
      style={styles.bgImage}
      resizeMode="cover"
      source={(image1, image2, image3)}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} />
            <IconButton style={styles.iconButton}>
              <Image
                style={styles.icon}
                source={require("../../assets/icon/addAvatarPhoto.png")}
              />
            </IconButton>
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.title}>Registration</Text>

        <ScrollView style={{ width: "100%" }}>
          <View style={styles.form}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.form}
            >
              <TextInput
                style={styles.input}
                autoComplete="username"
                placeholder="Login"
                textContentType="nickname"
                value={credentials.login}
                onChangeText={(value) =>
                  setСredentials((prevState) => ({
                    ...prevState,
                    login: value,
                  }))
                }
              />
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

            {/* {!isShowKeyboard && ( */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.formButton}
              onPress={handleSubmit}
            >
              <Text style={styles.formButtonText}>Register</Text>
            </TouchableOpacity>
            {/* )} */}
          </View>

          {/* {!isShowKeyboard && ( */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.changeFormButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.changeFormButtonText}>
              Already have an account? To come in
            </Text>
          </TouchableOpacity>
          {/* )} */}
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
    // resizeMode: "center",
  },
  container: {
    position: "relative",
    width: "100%",

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    marginTop: 60,
    justifyContent: "flex-end",
    alignItems: "center",

    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  avatarContainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {},
  iconButton: {
    position: "absolute",
    bottom: 14,
    right: -12,

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,

    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 25 / 2,
  },
  icon: {
    width: 13,
    height: 13,
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
