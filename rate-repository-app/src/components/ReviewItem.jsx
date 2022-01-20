import React from "react";

import { View } from "react-native";
import Text from "./Text";

import theme from "../theme";

const ReviewItem = ({ r, buttons }) => {
  const date = new Date(r.createdAt);
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  return (
    <View
      style={{
        backgroundColor:theme.colors.purpleLight,
        borderRadius:4,
        padding:10,
        marginLeft: 4,
        marginRight: 4
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 2,
            borderColor: theme.colors.purple,
            flexGrow: 0,
            marginRight: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            fontSize="subheading"
            fontWeight="bold"
            style={{
              color: theme.colors.purple
            }}
          >
            {r.rating}
          </Text>
        </View>
        <View
          style={{ flexShrink: 1 }}
        >
          <Text fontWeight="bold" wrapperStyle={{ marginBottom: 10 }}>{r.repository?.fullName || r.user.username}</Text>
          <Text
            color="textSecondary"
            wrapperStyle={{ marginBottom: 10 }}
          >
            {month} {day}, {year}
          </Text>
          <Text>{r.text}</Text>
        </View>
      </View>

      {buttons}
    </View>
  );
};

export default ReviewItem;
