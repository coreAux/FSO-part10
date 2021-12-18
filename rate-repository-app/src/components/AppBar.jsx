import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import theme from "../theme";
import Constants from "expo-constants";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.purple,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text fontSize="subheading" fontWeight="bold" style={{ color: "#fff" }}>
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
