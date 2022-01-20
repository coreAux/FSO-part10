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

const Button = ({ style, text, textStyle, onPress, disabled, ...props }) => {
  const buttonStyle = [
    styles.button,
    style,
    disabled && styles.buttonDisabled,
  ];

  const textStyles = [
    styles.text,
    textStyle,
    disabled && styles.textDisabled
  ];

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        buttonStyle,
        pressed && { backgroundColor: theme.colors.purpleLight }
      ]}
      {...props}
    >
      <Text fontWeight="bold" style={textStyles}>{text}</Text>
    </Pressable>
  );
};

export default Button;
