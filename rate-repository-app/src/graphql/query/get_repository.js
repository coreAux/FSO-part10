import { gql } from "@apollo/client";

const GET_REPOSITORY = gql`
query get_repository ($id: ID!) {
  repository (id:$id) {
    id
    url
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
}
`;

export default GET_REPOSITORY;
