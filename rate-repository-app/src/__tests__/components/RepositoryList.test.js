import React from "react";
import { render } from "@testing-library/react-native";

import { returnK } from "../../components/RepositoryItem/styles"
import { RepositoryListContainer } from "../../components/RepositoryList";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      // console.log(debug());

      getAllByTestId("repoItemBody").forEach((r, i) => {
        expect(r).toHaveTextContent(repositories.edges[i].node.fullName);
        expect(r).toHaveTextContent(repositories.edges[i].node.description);
        expect(r).toHaveTextContent(repositories.edges[i].node.language);
        // expect(r).toHaveTextContent(returnK(repositories.edges[i].node.forksCount)});
        // expect(r).toHaveTextContent(returnK(repositories.edges[i].node.stargazersCount));
        // expect(r).toHaveTextContent(returnK(repositories.edges[i].node.ratingAverage));
        // expect(r).toHaveTextContent(returnK(repositories.edges[i].node.reviewCount));
      });

      getAllByTestId("stargazersCount").forEach((r, i) => {
        expect(r).toHaveTextContent(returnK(repositories.edges[i].node.stargazersCount));
      });

      getAllByTestId("forksCount").forEach((r, i) => {
        expect(r).toHaveTextContent(returnK(repositories.edges[i].node.forksCount));
      });

      getAllByTestId("ratingAverage").forEach((r, i) => {
        expect(r).toHaveTextContent(returnK(repositories.edges[i].node.ratingAverage));
      });

      getAllByTestId("reviewCount").forEach((r, i) => {
        expect(r).toHaveTextContent(returnK(repositories.edges[i].node.reviewCount));
      });

      expect(1).toBe(1);

    });
  });
});
