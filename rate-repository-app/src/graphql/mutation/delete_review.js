import { gql } from "@apollo/client";

const DELETE_REVIEW = gql`
  mutation delete_review ($id: ID!) {
    deleteReview(id: $id)
  }
`;

export default DELETE_REVIEW;
