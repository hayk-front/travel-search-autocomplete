import styled from "styled-components";
import { MOBILE_SIZE, TABLET_SIZE } from "../../consts";

export const SearchFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > div:not(:last-child) {
    margin-right: 16px;
  }

  @media only screen and (max-width: ${TABLET_SIZE}px) {
    flex-wrap: wrap;
    margin: auto;

    & > * {
      flex: 40%;
      margin-bottom: 8px;
    }

    & > div:nth-child(odd) {
      margin-right: 16px;
    }
    & > div:nth-child(even) {
      margin-right: 0;
    }

    button {
      width: 190px;
    }
  }

  @media only screen and (max-width: ${MOBILE_SIZE}px) {
    width: 310px;

    & > * {
      flex: 100%;
    }

    & > div {
      margin: 0 0 8px 0 !important;
    }

    button {
      width: 100%;
    }
  }
`;
