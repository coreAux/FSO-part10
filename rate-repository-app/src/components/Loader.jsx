import React from "react";
import { View, ActivityIndicator } from "react-native";
import theme from "../theme";

const Loader = () => (
  <View style={{ marginTop: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <ActivityIndicator size="large" color={theme.colors.purpleLight} />
  </View>
);

export default Loader;
