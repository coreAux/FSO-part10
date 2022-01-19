import React from "react";
import useAuthorizedUser from "../hooks/useAuthorizedUser";

import { FlatList, View } from "react-native";
import ItemSeparator from "./ItemSeparator";
import Loader from "./Loader";
import Text from "./Text";

import theme from "../theme";

const ReviewItem = ({ r }) => {
  // console.log("r: ", r);
  // console.log(r.user.username);
  // console.log(r.createdAt);
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
          <Text fontWeight="bold" wrapperStyle={{ marginBottom: 10 }}>{r.user.username}</Text>
          <Text
            color="textSecondary"
            wrapperStyle={{ marginBottom: 10 }}
          >
            {month} {day}, {year}
          </Text>
          <Text>{r.text}</Text>
        </View>
      </View>
    </View>
  );
};

const UserReviews = () => {
  const { reviews, loading } = useAuthorizedUser({ includeReviews: true });

  if (!loading && reviews) {
    return (
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem r={item} />}
        keyExtractor={r => r.id}
        ItemSeparatorComponent={ItemSeparator}
      />
    );
  }

  return <Loader />;
};

export default UserReviews;
