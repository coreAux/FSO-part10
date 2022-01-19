import React, { useReducer } from "react";
import { useDebounce } from "use-debounce";
import { FlatList, View, Dimensions } from "react-native";
import { Menu, Searchbar } from 'react-native-paper';
import theme from "../theme";

import useRepositories from "../hooks/useRepositories";

import Button from "./Button";
import RepositoryItem from "./RepositoryItem";
import ItemSeparator from "./ItemSeparator";
import Loader from "./Loader";

const RepositoryHeader = ({ dispatch, filter, searchQuery, setSearchQuery }) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const filterRepos = (type) => {
    dispatch({ type });
  };

  return (
    <View
      style={{
        marginBottom: 10,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
      }}
    >
      <Searchbar
        placeholder="Search repository..."
        style={{
          borderRadius: 8,
          height: 40,
          backgroundColor: theme.colors.purpleLight,
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 5
        }}
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button style={{
            width: Dimensions.get("window").width - 10
          }}
          onPress={openMenu}
          text={`Filter: ${filter.filterValue}`}
          />
        }
        contentStyle={{
          marginTop: 40,
          backgroundColor: theme.colors.purpleLight,
          color: theme.colors.purple
        }}
      >
          <Menu.Item
            onPress={() => filterRepos("NONE")}
            title="None"
          />
          <Menu.Item
            onPress={() => filterRepos("LATEST_REPOS")}
            title="Latest repositories"
          />
          <Menu.Item
            onPress={() => filterRepos("RATING_HIGH")}
            title="Highest rated repositories"
          />
          <Menu.Item
            onPress={() => filterRepos("RATING_LOW")}
            title="Lowest rated repositories"
          />
      </Menu>
    </View>
  );
};

export const RepositoryListContainer = ({ repositories, onEndReach, dispatch, filter, searchQuery, setSearchQuery }) => {
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  return (
    <>
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
      ListHeaderComponent={<RepositoryHeader dispatch={dispatch} filter={filter} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
    </>
  );
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "NONE":
      return {
        ...state,
        filterValue: "None",
        orderBy: undefined,
        orderDirection: undefined
      };
    case "LATEST_REPOS":
      return {
        ...state,
        filterValue: "Latest repositories",
        orderBy: "CREATED_AT",
        orderDirection: "DESC"
      };
    case "RATING_HIGH":
      return {
        ...state,
        filterValue: "Highest rated repositories",
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC",
      };
    case "RATING_LOW":
      return {
        ...state,
        filterValue: "Lowest rated repositories",
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
      };
    default:
      throw new Error();
  }
};

const RepositoryList = () => {
  const [filter, dispatch] = useReducer(filterReducer, {
    filterValue: "None",
    orderBy: undefined,
    orderDirection: undefined,
  });
  const [searchQuery, setSearchQuery] = React.useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 1000);
  const { repositories, loading, fetchMore } = useRepositories({
    orderBy: filter.orderBy,
    orderDirection: filter.orderDirection,
    searchKeyword: debouncedSearchQuery,
    first: 1
  });

  const onEndReach = () => {
    fetchMore();
  };

  if (!loading && repositories) {
    return (
      <RepositoryListContainer
        repositories={repositories}
        onEndReach={onEndReach}
        dispatch={dispatch}
        filter={filter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    );
  }

  return <Loader />;

};

export default RepositoryList;
