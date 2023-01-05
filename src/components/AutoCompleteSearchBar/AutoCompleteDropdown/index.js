// @flow
import React from "react";
import * as Styled from "./styled";
import { Text } from "../../../components/Text";
import { AutoCompleteSearchBar } from "../../../components/AutoCompleteSearchBar";

declare type Props = {
  autoCompleteValues: any,
  onClick: (id: number) => void,
};

export const AutoCompleteDropdown = React.memo<*>(
  ({ autoCompleteValues, onClick }: Props) => {
    return (
      <Styled.AutoCompleteValuesWrapper>
        {autoCompleteValues.map((value) => {
          const { id, city, name, iata, country } = value;

          const airportName = `${name} ${iata ? `(${iata})` : ""}`;

          return (
            <Styled.ListItem key={id} onClick={() => onClick(id, airportName)} className="list-item">
              <Styled.AirplaneIcon iconName="airplane" size={20} color="grey" />
              <Styled.TextsWrapper>
                <Styled.AirportName color="black" fontSize={14}>
                  {airportName}
                </Styled.AirportName>
                {city && country ? (
                  <Text color="grey" fontSize={12} lineHeight={14}>
                    {city.name}, {country.name}
                  </Text>
                ) : null}
              </Styled.TextsWrapper>
            </Styled.ListItem>
          );
        })}
      </Styled.AutoCompleteValuesWrapper>
    );
  }
);
