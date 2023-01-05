import styled from "styled-components";
import { globalColors } from "../../consts/colors";
import { MOBILE_SIZE, TABLET_SIZE } from "../../consts";

export const SearchBarWrapper = styled.div`
  position: relative;
  height: 40px;
  min-width: 186px;

  width: 250px;

  @media only screen and (max-width: ${TABLET_SIZE}px) {
    width: 190px;
  }
  @media only screen and (max-width: ${MOBILE_SIZE}px) {
    width: 310px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px;
  border-radius: 6px;
  outline: none;
  border: 1px solid ${globalColors.grey};
`;
