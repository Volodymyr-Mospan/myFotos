import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScren = () => {
  const [credentials, setСredentials] = useState(initialState);
  const [isPasswordHidden, setIsPasswordHidden] = useState("true");

  const showPasswordToggle = () => {
    setIsPasswordHidden((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image />
      </View>

      <Text style={styles.title}>Registration</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          autoComplete="username"
          placeholder="Login"
          value={credentials.login}
          onChangeText={(value) =>
            setСredentials((prevState) => ({ ...prevState, login: value }))
          }
        />
        <TextInput
          style={styles.input}
          autoComplete="email"
          placeholder="Email adress"
          value={credentials.email}
          onChangeText={(value) =>
            setСredentials((prevState) => ({ ...prevState, email: value }))
          }
        />
        <View
          style={{
            marginBottom: 43,
            position: "relative",
          }}
        >
          <TextInput
            style={{
              ...styles.input,
              marginBottom: 0,
            }}
            autoComplete="new-password"
            placeholder="Password"
            secureTextEntry={!!isPasswordHidden}
            value={credentials.password}
            onChangeText={(value) =>
              setСredentials((prevState) => ({ ...prevState, password: value }))
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

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.formButton}
          onPress={showPasswordToggle}
        >
          <Text style={styles.formButtonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.changeFormButton}
        onPress={showPasswordToggle}
      >
        <Text style={styles.changeFormButtonText}>
          Already have an account? To come in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,

    justifyContent: "flex-end",
    alignItems: "center",

    fontFamily: "Roboto",
    fontWeight: 500,

    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    paddingBottom: 33,

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
    padding: 16,
    marginBottom: 16,

    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,

    fontSize: 16,
    lineHeight: 19,
  },

  showButton: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  showButtonText: {
    fontWeight: 400,
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
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: "#FFFFFF",
  },

  changeFormButton: {
    marginBottom: 78,
  },
  changeFormButtonText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
});