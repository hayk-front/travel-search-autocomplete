import styled from "styled-components";

export const MainSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

  width: 80%;
  max-width: 830px;
  margin: 0 auto;

  @media only screen and (max-width: 1025px) {
    width: 96%;
  }
`;
