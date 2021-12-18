import React from "react";
// import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";

import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  }
});

const Main = () => {
  return (
    <>
      <AppBar />
      <View
        style={styles.container}
      >
        <Text>Rate Repository Application</Text>
      </View>
      <RepositoryList />
    </>
  );
};

export default Main;
