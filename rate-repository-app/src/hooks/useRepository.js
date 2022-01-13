import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import GET_REPOSITORY from "../graphql/query/get_repository";

const useRepositories = ( id ) => {
  const [repository, setRepository] = useState(null);
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORY, {
    variables: {
      id
    },
     fetchPolicy: "cache-and-network",
    }
  );

  useEffect(() => {
    if (data !== undefined) {
      setRepository(data.repository);
    }
  }, [data]);

  return { repository, error, loading, refetch };
};

export default useRepositories;
