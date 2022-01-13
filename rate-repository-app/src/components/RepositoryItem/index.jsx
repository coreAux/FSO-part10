import React from "react";
import Text from "../Text";

import { RepositoryItemWrapper, Body, Avatar, BodyRight, LanguageButton, Footer, FooterItem } from "./styles";

const RepositoryItem = ({ r, testID }) => {

  return (
    <RepositoryItemWrapper testID={testID}>
      <Body testID="repoItemBody" >
        <Avatar uri={r.ownerAvatarUrl} />
        <BodyRight>
          <Text wrapperStyle={{ marginBottom: 10 }} fontSize="subheading" fontWeight="bold" >
            {r.fullName}
          </Text>
          <Text wrapperStyle={{ marginBottom: 10 }} color="textSecondary">
            {r.description}
          </Text>
          <LanguageButton>
            {r.language}
          </LanguageButton>
        </BodyRight>
      </Body>

      <Footer>
        <FooterItem
          testID="stargazersCount"
          number={r.stargazersCount}
          text="Stars"
        />
        <FooterItem
          testID="forksCount"
          number={r.forksCount}
          text="Forks"
        />
        <FooterItem
          testID="reviewCount"
          number={r.reviewCount}
          text="Reviews"
        />
        <FooterItem
          testID="ratingAverage"
          number={r.ratingAverage}
          text="Rating"
        />
      </Footer>
    </RepositoryItemWrapper>
  );
};

export default RepositoryItem;
