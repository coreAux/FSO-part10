import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.purpleMedium,
    borderRadius: 8,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    textTransform: "uppercase",
    color: theme.colors.purple
  },
  error: {
    color: "red"
  },
});

const Button = ({ style, text, ...props }) => {
  const buttonStyle = [
    styles.button,
    style,
  ];

  return (
    <Pressable
      style={buttonStyle}
      {...props}
    >
      <Text fontWeight="bold" style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
