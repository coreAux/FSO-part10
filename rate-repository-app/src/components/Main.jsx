import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import theme from "../theme";

import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
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
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Switch>
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
