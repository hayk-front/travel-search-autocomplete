import styled from "styled-components";

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;

  svg {
    fill: ${({ fill }) => fill};
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    pointer-events: none;
  }
`;
