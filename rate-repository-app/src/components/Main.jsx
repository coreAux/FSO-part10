import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Route, Switch, Redirect, useLocation } from "react-router-native";

import theme from "../theme";

import AppBar from "./AppBar";
import Text from "./Text";
import RepositoryList from "./RepositoryList";
import CreateReview from "./CreateReview";
import SingleRepository from "./SingleRepository";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.purple,
    flexGrow: 1,
    flexShrink: 1,
  }
});

const Main = () => {
  const location = useLocation();

  // console.log("location: ", location);
  let title = "";

  switch (location.pathname) {
    case ("/create-review"):
      title = "Create a review";
      break;
    case ("/sign-in"):
      title = "Sign in";
      break;
    case ("/"):
      title = "Repositories";
      break;
    default:
      title = location.pathname.replace("/", "").replace(".", "/");
      break;
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Text
        numberOfLines={1}
        fontWeight="bold"
        style={{
          marginBottom: 10,
          marginLeft: 10,
          fontSize: 36,
          color: theme.colors.purpleLight
        }}
      >
        {title}
      </Text>
      <Switch>
        <Route path="/create-review" exact>
          <CreateReview />
        </Route>
        <Route path="/sign-in" exact>
          <SignIn />
        </Route>
        <Route path="/:id" exact>
          <SingleRepository />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </SafeAreaView>
  );
};

export default Main;
