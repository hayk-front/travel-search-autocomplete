// @flow
import React from "react";
import * as Styled from "./styled";
import { TrinetiumLogo } from "../../components/TrinetiumLogo";
import { Icon } from "../../components/Icon";
import { LINKEDIN_URL, GITHUB_URL } from "../../consts";

export const Header = React.memo(() => {
  const onSocialIconClick = (url: string): void => {
    window.open(url, "_blank");
  };

  return (
    <Styled.HeaderWrapper>
      <TrinetiumLogo />

      <Styled.IconsWrapper>
        <Icon
          iconName="linkedin"
          color="#0B66C2"
          size={36}
          onClick={() => onSocialIconClick(LINKEDIN_URL)}
        />
        <Icon
          iconName="github"
          color="none"
          size={36}
          onClick={() => onSocialIconClick(GITHUB_URL)}
        />
      </Styled.IconsWrapper>
    </Styled.HeaderWrapper>
  );
});
