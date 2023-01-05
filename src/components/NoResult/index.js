// @flow
import React from "react";
import * as Styled from "./styled";
import { Text } from "../Text";
import { Icon } from "../Icon";

export const NoResult = React.memo(() => {
  return (
    <Styled.NoResultWrapper>
      <Icon iconName="crash" size={36} color="black" />
      <Text fontSize={16} color="black" fontWeight={500}>
        Sorry, no results found
      </Text>
    </Styled.NoResultWrapper>
  );
});
