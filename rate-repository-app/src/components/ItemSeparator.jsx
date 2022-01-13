import React from "react";

import theme from "../theme";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.purple,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default ItemSeparator;
