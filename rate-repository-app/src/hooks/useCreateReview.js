import { useMutation } from "@apollo/client";
import CREATE_REVIEW from "../graphql/mutation/create_review";

const useSignIn = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async (review) => {
    const { data } = await mutate({ variables: { review } });
    return data;
  };

  return [createReview, result];
};

export default useSignIn;
