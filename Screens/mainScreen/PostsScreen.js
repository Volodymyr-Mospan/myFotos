import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const PostsScreen = ({ route }) => {
  const user = route.params?.user;
  console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.userInformation}>
        <Image
          style={styles.userFoto}
          source={require("../../assets/img/userFoto.jpg")}
        />
        <View>
          <Text style={styles.userLogin}>{user.login}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,

    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  userInformation: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    gap: 8,
  },

  userFoto: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 16,
  },

  userLogin: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
  },

  userEmail: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
