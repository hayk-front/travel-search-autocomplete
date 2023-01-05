import styled from "styled-components";
import { globalColors } from "../../consts/colors";
import { MOBILE_SIZE, TABLET_SIZE } from "../../consts";

const PADDING_SIZE = 24;
const MOBILE_PADDING_SIZE = 16;

export const TripCardWrapper = styled.div`
  display: flex;

  border: 1px solid ${globalColors.border};
  border-radius: 24px;

  width: 100%;
  min-width: 310px;
  height: 180px;
  margin-top: 16px;

  padding: ${PADDING_SIZE}px;
  background: linear-gradient(45deg, rgba(3, 100, 188, 0.2) 10%, #f6f9f8 90%);

  @media only screen and (max-width: ${TABLET_SIZE}px) {
    margin: 16px auto 0;
    flex-direction: column;
    height: fit-content;
    padding: ${MOBILE_PADDING_SIZE}px;
  }

  @media only screen and (max-width: ${MOBILE_SIZE}px) {
    width: 310px;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: calc(100% + ${2 * PADDING_SIZE}px);
  margin: ${-PADDING_SIZE}px 24px 0 24px;
  background-color: ${globalColors.grey};

  @media only screen and (max-width: ${TABLET_SIZE}px) {
    height: 1px;
    width: calc(100% + ${2 * MOBILE_PADDING_SIZE}px);
    margin: 16px 0 16px ${-MOBILE_PADDING_SIZE}px;
  }
`;

export const LeftSection = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  & > p:first-child {
    margin-bottom: 8px;
  }

  @media only screen and (max-width: ${TABLET_SIZE}px) {
    width: 100%;
  }
`;

export const RightSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    margin-bottom: 16px;
  }

  @media only screen and (max-width: ${TABLET_SIZE}px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    & > p {
      font-size: 14px;
      margin-bottom: 0;
    }
  }
`;
