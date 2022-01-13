import { gql } from "@apollo/client";

const CREATE_REVIEW = gql`
  mutation create_review ($review: CreateReviewInput!) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;

export default CREATE_REVIEW;
