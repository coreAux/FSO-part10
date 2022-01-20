import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import GET_REPOSITORIES from "../graphql/query/get_repositories";

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState(null);
  const { data, error, loading, refetch, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
      variables: {
        ...variables
      },
      fetchPolicy: "cache-and-network",
    }
  );

  useEffect(() => {
    if (data !== undefined) {
      setRepositories(data.repositories);
    }
  }, [data]);

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      },
    });
  };

  return { repositories, fetchMore: handleFetchMore, error, loading, refetch, ...result };
};

export default useRepositories;
