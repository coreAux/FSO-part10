import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";
import theme from "../theme";
import Constants from "expo-constants";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.purple,
    height: 100,
    alignItems: "stretch",
    justifyContent: "space-evenly",
  },
  pressable: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});

const AppBar = () => {
  const history = useHistory();

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={() => history.push("/")}>
        <Text fontSize="subheading" fontWeight="bold" style={{ color: "#fff" }}>
          Repositories
        </Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => history.push("/sign-in")}>
        <Text fontSize="subheading" fontWeight="bold" style={{ color: "#fff" }}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
