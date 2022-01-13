import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation create_user ($user: CreateUserInput!) {
    createUser (user: $user) {
      id
      username
      createdAt
  		reviewCount
    }
  }
`;

export default CREATE_USER;
