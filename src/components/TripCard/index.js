// @flow
import React from "react";
import * as Styled from "./styled";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { globalColors } from "../../consts/colors";
import { useIsMobile } from "../../customHooks";

declare type Props = {
  tripData: TTripsData,
};

export const TripCard = React.memo(({ tripData }: Props) => {
  const {
    id,
    title,
    budget,
    currency,
    tripCategory,
    arrivalAirport,
    departureAirport,
  } = tripData;

  const { black, darkGrey } = globalColors;

  const isTablet = useIsMobile();

  return (
    <Styled.TripCardWrapper>
      <Styled.LeftSection>
        <Text fontSize={isTablet ? 16 : 20} fontWeight={700} color={black}>
          {title}
        </Text>
        <Text fontSize={isTablet ? 14 : 16} fontWeight={500} color={darkGrey}>
          Flight Type: {tripCategory.name}
        </Text>
        <Text fontSize={isTablet ? 12 : 14} fontWeight={400} color={black}>
          Departure Airport: {departureAirport}
        </Text>
        <Text fontSize={isTablet ? 12 : 14} fontWeight={400} color={black}>
          Arrival Airport: {arrivalAirport}
        </Text>
      </Styled.LeftSection>

      <Styled.Divider />

      <Styled.RightSection>
        <Text fontSize={18} fontWeight={700} color={black}>
          Price: {budget} {currency}
        </Text>
        <Button size="medium" isColorFilled color={darkGrey}>
          Book
        </Button>
      </Styled.RightSection>
    </Styled.TripCardWrapper>
  );
});
