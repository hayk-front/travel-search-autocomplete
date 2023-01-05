import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(25, 72, 187, 0.1) 0%,
    rgba(25, 72, 187, 0.03) 100%
  );
`;

export const IconsWrapper = styled.div`
  display: flex;

  div {
    cursor: pointer;
    margin-left: 5px;

    &:hover {
      filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));
    }
  }
`;
