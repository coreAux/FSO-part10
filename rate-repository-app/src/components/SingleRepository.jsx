import React from "react";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import * as WebBrowser from "expo-web-browser";

import theme from "../theme";
import { View, FlatList } from "react-native";

import Button from "./Button";
import Text from "./Text";
import RepositoryItem from "./RepositoryItem";
import ItemSeparator from "./ItemSeparator";
import Loader from "./Loader";

const RepositoryHeader = ({ r }) => (
  <View>
    <RepositoryItem
      r={r}
    />
    <Button
      style={{ marginTop: 10, marginBottom: 10 }}
      text="Open in GitHub"
      onPress={() => WebBrowser.openBrowserAsync(r.url)}
      disabled={false}
    />
  </View>
);

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

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  const reviews = !loading && repository && repository.reviews.edges.map((r) => r.node).sort((a, b) => {
    const c = new Date(b.createdAt);
    const d = new Date(a.createdAt);
    return c - d;
  });

  // console.log("id: ", id);
  // console.log("repository: ", repository);
  // console.log("loading: ", loading);

  if (!loading && reviews && repository) {
    return (
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem r={item} />}
        keyExtractor={r => r.id}
        ListHeaderComponent={() => <RepositoryHeader r={repository} />}
        ItemSeparatorComponent={ItemSeparator}
      />
    );
  }

  return <Loader />;

};

export default SingleRepository;
