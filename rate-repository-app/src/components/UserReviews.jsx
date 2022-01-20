import React from "react";
import useAuthorizedUser from "../hooks/useAuthorizedUser";
import { useHistory } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

import { FlatList, View, Alert } from "react-native";
import ItemSeparator from "./ItemSeparator";

import ReviewItem from "./ReviewItem";
import Button from "./Button";
import Loader from "./Loader";

import theme from "../theme";

const Buttons = ({ repoId, reviewId, refetch }) => {
  const [deleteReview] = useDeleteReview();
  const history = useHistory();

  const confirmDeleteReview = (id) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {
            deleteReview(id);
            refetch({ includeReviews: true });
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Button
        style={{
          paddingLeft: 10,
          paddingRight: 10
        }}
        text="View repository"
        onPress={() => history.push(`/${repoId}`)}
        disabled={false}
      />
      <Button
        style={{
          backgroundColor: theme.colors.purple,
          paddingLeft: 10,
          paddingRight: 10
        }}
        textStyle={{
          color: "white"
        }}
        text="Delete review"
        onPress={() => confirmDeleteReview(reviewId)}
        disabled={false}
      />
    </View>
  );
};

const UserReviews = () => {
  const { reviews, loading, refetch } = useAuthorizedUser({ includeReviews: true });

  if (!loading && reviews) {
    return (
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem r={item} buttons={<Buttons repoId={item.repositoryId} reviewId={item.id} refetch={refetch} />} />}
        keyExtractor={r => r.id}
        ItemSeparatorComponent={ItemSeparator}
      />
    );
  }

  return <Loader />;
};

export default UserReviews;
