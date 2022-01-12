import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import AUTHORIZED_USER from "../graphql/query/authorized_user";

const useRepositories = () => {
  const [user, setUser] = useState(null);
  const { data, error, loading, refetch } = useQuery(AUTHORIZED_USER);

  useEffect(() => {
    if (data !== undefined) {
      setUser(data.authorizedUser);
    }
  }, [data]);

  // console.log("data: ", data);
  // console.log("error: ", error);
  // console.log("loading: ", loading);

  return { user, error, loading, refetch };
};

export default useRepositories;
