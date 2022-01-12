import { gql } from "@apollo/client";

const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export default AUTHORIZED_USER;
