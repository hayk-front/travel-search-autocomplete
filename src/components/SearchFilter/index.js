// @flow
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import * as Styled from "./styled";
import { Button } from "../Button";
import { DatePicker } from "../DatePicker";
import { fetchTripsData } from "../../api/mainApi";
import { setTripsData } from "../../redux/actions/action";
import { AutoCompleteSearchBar } from "../AutoCompleteSearchBar";

export const SearchFilter = React.memo<*>(() => {
  const [departureAirportId, setDepartureAirportId] = useState("");
  const [arrivalAirportId, setArrivalAirportId] = useState("");
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();

  const onSearchBtnClick = useCallback(() => {
    fetchTripsData(date, departureAirportId, arrivalAirportId)
      .then((res) => {
        if (!res.result || !res.result.trips.length) {
          dispatch(setTripsData([]));
          return;
        }
        const tripsData = res.result.trips;
        if (tripsData.length) {
          dispatch(setTripsData(tripsData));
        }
      })
      .catch((err) => alert(err));
  }, [date, departureAirportId, arrivalAirportId]);

  return (
    <Styled.SearchFilterWrapper>
      <AutoCompleteSearchBar
        placeholder="From (Origin)"
        onSelect={setDepartureAirportId}
      />
      <AutoCompleteSearchBar placeholder="To (Destination)" onSelect={setArrivalAirportId} />
      <DatePicker setDate={setDate} />
      <Button isColorFilled color="primaryDark" onClick={onSearchBtnClick}>
        Search
      </Button>
    </Styled.SearchFilterWrapper>
  );
});
