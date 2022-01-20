import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import AUTHORIZED_USER from "../graphql/query/authorized_user";

const useRepositories = ({ includeReviews }) => {

  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { data, error, loading, refetch } = useQuery(AUTHORIZED_USER, {
    variables: {
      includeReviews
    },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (data !== undefined) {
      setUser(data.authorizedUser);

      if (includeReviews) {

        setReviews(data.authorizedUser?.reviews.edges.map((e) => e.node));
      }
    }
  }, [data]);

  return { user, reviews, error, loading, refetch };
};

export default useRepositories;
