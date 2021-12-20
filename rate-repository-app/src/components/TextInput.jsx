import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.purpleLight,
    height: 40,
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  error: {
    backgroundColor: "#d73a4a",
    color: "red",
    borderColor: "red",
    borderWidth: 1,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.input,
    error && styles.error,
    style
  ];

  return (
    <>
      <NativeTextInput style={textInputStyle} {...props} />
    </>
  );
};

export default TextInput;
