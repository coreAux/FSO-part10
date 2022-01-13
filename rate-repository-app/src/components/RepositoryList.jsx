import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import theme from "../theme";

import useRepositories from "../hooks/useRepositories";

import RepositoryItem from "./RepositoryItem";
import Loader from "./Loader";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.purple,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      style={{backgroundColor: theme.colors.purple}}
      testID="flatList"
      data={repositoryNodes}
      renderItem={({ item }) => (
        <RepositoryItem
          testID="repositoryItem"
          r={item}
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={r => r.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  if (!loading && repositories) {
    return <RepositoryListContainer repositories={repositories} />;
  }

  return <Loader />;

};

export default RepositoryList;
