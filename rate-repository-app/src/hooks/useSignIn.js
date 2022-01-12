import { useMutation, useApolloClient } from "@apollo/client";
import AUTHORIZE from "../graphql/mutation/authorize";

import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async (credentials) => {
    const { data } = await mutate({ variables: { credentials } });
    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;
