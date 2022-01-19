import { gql } from "@apollo/client";

const AUTHORIZED_USER = gql`
  query authorized_user ($includeReviews: Boolean!) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            user {
              username
            }
            repository {
              fullName
            }
            userId
            repositoryId
            rating
            createdAt
            text
          }
        }
      }
    }
  }
`;

export default AUTHORIZED_USER;
