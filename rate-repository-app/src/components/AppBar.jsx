import React from "react";
import { Pressable, ScrollView, View, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";
import theme from "../theme";
import Constants from "expo-constants";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.purple,
    height: 90,
  },
  pressable: {
    backgroundColor: "rgba(255,255,255,.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tabText: {
    color: "#ffffff"
  }
});

const TabBarItem = ({ to, label }) => {
  const history = useHistory();

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => history.push(to)}
    >
      <Text fontSize="subheading" fontWeight="bold" style={styles.tabText}>
        {label}
      </Text>
    </Pressable>
  );
};

const AppBar = () => {

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TabBarItem
          to="/"
          label="Repositories"
        />
        <TabBarItem
          to="/sign-in"
          label="Sign in"
        />

      </ScrollView>
    </View>
  );
};

export default AppBar;
