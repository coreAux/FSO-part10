import React from "react";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import * as WebBrowser from "expo-web-browser";

import { View, FlatList } from "react-native";

import Button from "./Button";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
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

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading, fetchMore } = useRepository({ id: id, first: 4 });

  const reviews = !loading && repository && repository.reviews.edges.map((r) => r.node).sort((a, b) => {
    const c = new Date(b.createdAt);
    const d = new Date(a.createdAt);
    return c - d;
  });

  if (!loading && reviews && repository) {
    return (
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem r={item} />}
        keyExtractor={r => r.id}
        ListHeaderComponent={() => <RepositoryHeader r={repository} />}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.5}
      />
    );
  }

  return <Loader />;

};

export default SingleRepository;
