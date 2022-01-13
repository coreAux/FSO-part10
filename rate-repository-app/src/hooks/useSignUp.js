import { useMutation } from "@apollo/client";
import CREATE_USER from "../graphql/mutation/create_user";

const useSignIn = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const signUp = async (user) => {
    const { data } = await mutate({ variables: { user } });
    return data;
  };

  return [signUp, result];
};

export default useSignIn;
