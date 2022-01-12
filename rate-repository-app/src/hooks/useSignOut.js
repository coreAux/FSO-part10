import { useApolloClient } from "@apollo/client";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return signOut;
};

export default useSignIn;
