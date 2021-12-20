import React from "react";
import Text from "../Text";

import { RepositoryItemWrapper, Body, Avatar, BodyRight, LanguageButton, Footer, FooterItem } from "./styles";

const RepositoryItem = ({ r }) => {

  return (
    <RepositoryItemWrapper>
      <Body>
        <Avatar uri={r.ownerAvatarUrl} />
        <BodyRight>
          <Text wrapperStyle={{ marginBottom: 5 }} fontSize="subheading" fontWeight="bold" >
            {r.fullName}
          </Text>
          <Text wrapperStyle={{ marginBottom:5 }} color="textSecondary">
            {r.description}
          </Text>
          <LanguageButton>
            {r.language}
          </LanguageButton>
        </BodyRight>
      </Body>

      <Footer>
        <FooterItem
          number={r.stargazersCount}
          text="Stars"
        />
        <FooterItem
          number={r.forksCount}
          text="Forks"
        />
        <FooterItem
          number={r.reviewCount}
          text="Reviews"
        />
        <FooterItem
          number={r.ratingAverage}
          text="Rating"
        />
      </Footer>
    </RepositoryItemWrapper>
  );
};

export default RepositoryItem;
