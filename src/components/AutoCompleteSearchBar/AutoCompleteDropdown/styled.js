import styled from "styled-components";
import { Icon } from "../../../components/Icon";
import { Text } from "../../../components/Text";
import { globalColors } from "../../../consts/colors";

export const AutoCompleteValuesWrapper = styled.ul`
  position: absolute;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;

  margin-top: -1px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid ${globalColors.grey};
  background: ${globalColors.white}; ;
`;

export const ListItem = styled.li`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  width: 100%;
  padding: 8px;

  &:hover {
    background-color: ${globalColors.lightGrey};
  }
`;

export const AirplaneIcon = styled(Icon)`
  margin: 2px 5px 0 0;
`;

export const AirportName = styled(Text)`
  max-width: 99%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 25px);
`;
