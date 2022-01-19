import { gql } from "@apollo/client";

const GET_REPOSITORY = gql`
  query get_repository ($id: ID!, $first: Int, $after: String) {
    repository (id: $id) {
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
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export default GET_REPOSITORY;
