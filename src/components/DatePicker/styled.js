import styled from "styled-components";
import { globalColors } from "../../consts/colors";
import { MOBILE_SIZE, TABLET_SIZE } from "../../consts";

export const DatePicker = styled.input`
  height: 40px;
  min-width: 120px;

  padding: 8px;
  margin-right: 16px;
  border-radius: 6px;
  outline: none;
  border: 1px solid ${globalColors.grey};

  @media only screen and (max-width: ${TABLET_SIZE}px) {
    width: 190px;
    margin-bottom: 8px;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}px) {
    width: 310px;
    margin-right: 0;
  }
`;
