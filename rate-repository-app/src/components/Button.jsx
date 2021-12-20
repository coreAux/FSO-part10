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
  buttonDisabled: {
    backgroundColor: theme.colors.disabledPurpleMedium,
  },
  textDisabled: {
    color: theme.colors.disabledPurple,
  }
});

const Button = ({ style, text, onPress, disabled, ...props }) => {
  const buttonStyle = [
    styles.button,
    style,
    disabled && styles.buttonDisabled,
  ];

  const textStyle = [
    styles.text,
    disabled && styles.textDisabled
  ];

  return (
    <Pressable
      onPress={onPress}
      style={buttonStyle}
      {...props}
    >
      <Text fontWeight="bold" style={textStyle}>{text}</Text>
    </Pressable>
  );
};

export default Button;
