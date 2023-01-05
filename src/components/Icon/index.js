// @flow
import React from "react";
import * as Styled from "./styled";
import { globalColors } from "../../consts/colors";
import { icons } from "../../icons";

declare type Props = {
  iconName: string,
  size?: number,
  color: string,
  className?: string,
  onClick?: () => void,
};

export const Icon = React.memo<Props>((props: Props) => {
  const { iconName, size = 24, color, onClick, className = "" } = props;

  return (
    <Styled.IconWrapper
      size={size}
      onClick={onClick}
      className={className}
      fill={globalColors[color] || color}
      dangerouslySetInnerHTML={{ __html: icons[iconName] }}
    />
  );
});
