// @flow
import { AUTOCOMPLETE_API_URL, TICKET_SEARCH_API_URL } from "../consts";
import { replaceApiVariables } from "../helpers";

async function getApiCallResponse(queryString) {
  const response = await fetch(queryString);
  return await response.json();
}

export const fetchAutoCompleteValues = (searchString: string) => {
  const queryString = replaceApiVariables(AUTOCOMPLETE_API_URL, searchString);

  return getApiCallResponse(queryString);
};

export const fetchTripsData = (
  date: string | null,
  depAirportId: number | null,
  arrAirportId: number | null,
  page: number = 1
) => {
  const dateQuery: string = date ? `&etd=${date}` : "";

  const departureQuery: string = depAirportId
    ? `departureAirportId=${depAirportId}`
    : "";
  const arrivalQuery: string = arrAirportId
    ? `&arrivalAirportId=${arrAirportId}`
    : "";

  const pageAndCountQuery: string = `&pageSize=20&pageNumber=${page}`;

  const tripSearchString: string = `${departureQuery}${arrivalQuery}${dateQuery}${pageAndCountQuery}`;

  const queryString: string = replaceApiVariables(
    TICKET_SEARCH_API_URL,
    tripSearchString
  );

  return getApiCallResponse(queryString);
};
