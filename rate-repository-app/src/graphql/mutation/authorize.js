import { gql } from "@apollo/client";

// const AUTHORIZE = gql`
//   mutation authorize ($credentials: AuthorizeInput!) {
//     authorize(credentials: { username: $credentials.username, password: $credentials.password }) {
//       accessToken
//     }
//   }
// `;

const AUTHORIZE = gql`
  mutation authorize ($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export default AUTHORIZE;
