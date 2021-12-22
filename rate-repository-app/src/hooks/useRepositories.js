import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import GET_REPOSITORIES from "../graphql/query/get_repositories";

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, { fetchPolicy: "cache-and-network", });

  useEffect(() => {
    if (data !== undefined) {
      setRepositories(data.repositories);
    }
  }, [data]);

  // console.log("data: ", data);
  // console.log("error: ", error);
  // console.log("loading: ", loading);

  return { repositories, error, loading, refetch };
};

export default useRepositories;
