import React from "react";
// import { Text } from "react-native";
import Text from "./Text";

const RepositoryItem = ({ r }) => {

  return (
    <>
      <Text fontSize="subheading" fontWeight="bold" >Full name: {r.fullName}</Text>
      <Text>Description: {r.description}</Text>
      <Text>Language: {r.language}</Text>
      <Text>Stars: {r.stargazersCount}</Text>
      <Text>Forks: {r.forksCount}</Text>
      <Text>Reviews: {r.reviewCount}</Text>
      <Text>Rating: {r.ratingAverage}</Text>
    </>
  );
};

export default RepositoryItem;