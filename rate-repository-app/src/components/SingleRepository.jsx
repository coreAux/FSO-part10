import React from "react";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import * as WebBrowser from "expo-web-browser";

import { View } from "react-native";

import Button from "./Button";
import Text from "./Text";
import RepositoryItem from "./RepositoryItem";

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  // console.log("id: ", id);
  // console.log("repository: ", repository);
  // console.log("loading: ", loading);

  if (!loading && repository) {
    return (
      <View>
        <RepositoryItem
          r={repository}
        />
        <Button
          style={{ marginTop: 10 }}
          text="Open in GitHub"
          onPress={() => WebBrowser.openBrowserAsync(repository.url)}
          disabled={false}
        />
      </View>
    );
  }

  return  (
    <Text>
      Loading...
    </Text>
  );

};

export default SingleRepository;
