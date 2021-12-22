import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import theme from "../theme";

import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.purple,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  return (
    <FlatList
    style={{backgroundColor: theme.colors.purple}}
      data={repositoryNodes}
      renderItem={({ item }) => (
        <RepositoryItem
          r={item}
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={r => r.id}
    />
  );
};

export default RepositoryList;
