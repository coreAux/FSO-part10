import React from "react";
import { View, Image } from "react-native";
import Text from "../Text";
import theme from "../../theme";

export const returnK = (int) => {
  let returnedInt = int;

  switch (true) {
  case (int < 1000):
    return String(returnedInt);
  case (int >= 1000):
    return String(`${(returnedInt / 1000).toFixed(1)}k`);
  default:
    return String(returnedInt);
  }
};

export const RepositoryItemWrapper = ({ testID, children }) => (
  <View
    testID={testID}
    style={{
      backgroundColor:theme.colors.purpleLight,
      borderRadius:4,
      padding:10,
      marginLeft: 4,
      marginRight: 4
    }}
  >
    {children}
  </View>
);

export const Body = ({ testID, children }) => (
  <View
    testID={testID}
    style={{
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginBottom: 10,
    }}
  >
    {children}
  </View>
);

export const Avatar = ({ uri }) => <Image
  style={{
    width:70,
    height:70,
    borderRadius:4,
    flexGrow: 0,
    marginRight: 10
  }}
  source={{uri: uri}}
/>;

export const BodyRight = ({ children }) => (
  <View
    style={{ flexShrink: 1 }}
  >
    {children}
  </View>
);

export const LanguageButton = ({ children }) => (
  <View style={{ flexDirection: "row" }}>
    <Text
      wrapperStyle={{
        backgroundColor: theme.colors.purpleMedium,
        borderRadius: 8,
      }}
      style={{
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        color: theme.colors.purple,
      }}
    >
      {children}
    </Text>
  </View>
);

export const Footer = ({ testID, children }) => (
  <View
    testID={testID}
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    }}
  >
    {children}
  </View>
);

export const FooterItem = ({ testID, number, text }) => (
  <View testID={testID} style={{alignItems:"center"}}>
    <Text
      fontWeight="bold"
      style={{marginBottom:2}}
    >
      {returnK(number)}
    </Text>
    <Text>{text}</Text>
  </View>
);
