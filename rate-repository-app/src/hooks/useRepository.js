import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import GET_REPOSITORY from "../graphql/query/get_repository";

const useRepositories = (variables) => {

  const [repository, setRepository] = useState(null);
  const { data, error, loading, refetch, fetchMore } = useQuery(GET_REPOSITORY, {
    variables: {
      ...variables
    },
     fetchPolicy: "cache-and-network",
    }
  );

  useEffect(() => {
    if (data !== undefined) {
      setRepository(data.repository);
    }
  }, [data]);

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables
      },
    });
  };

  return { repository, fetchMore: handleFetchMore, error, loading, refetch };
};

export default useRepositories;
