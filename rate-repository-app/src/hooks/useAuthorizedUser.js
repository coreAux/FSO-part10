import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import AUTHORIZED_USER from "../graphql/query/authorized_user";

const useRepositories = ({ includeReviews }) => {
  console.log("includeReviews: ", includeReviews);
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { data, error, loading, refetch } = useQuery(AUTHORIZED_USER, {
    variables: {
      includeReviews
    }
  });

  useEffect(() => {
    if (data !== undefined) {
      setUser(data.authorizedUser);

      if (includeReviews) {
        console.log("reviews: ", data.authorizedUser.reviews.edges);
        setReviews(data.authorizedUser.reviews.edges.map((e) => e.node));
      }
    }
  }, [data]);

  // console.log("data: ", data);
  // console.log("error: ", error);
  // console.log("loading: ", loading);

  return { user, reviews, error, loading, refetch };
};

export default useRepositories;
