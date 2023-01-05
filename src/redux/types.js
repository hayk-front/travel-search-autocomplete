// @flow

declare type TTripData = {
  id: number,
  tripType: number,
  title: string,
  postedDate: string,
  departureAirport: string,
  arrivalAirport: string,
  fromDate: string,
  toDate: string,
  companyId: number,
  company: string,
  tripCategoryId: number,
  tripCategory: {
    id: number,
    name: string,
  },
  budget: number,
  currency: string,
  hasQuoted: boolean,
  hasReplies: boolean,
  hasQuotationRequest: boolean,
  integrationSourceId: number,
  noOfPassenger: number,
  integrationSource: string,
  createdByUser: number,
  tripQuotes: Array<string>,
  tripReplies: Array<string>,
};

declare type TGlobalState = {
  tripsData: Array<TTripData>,
};

declare type TState = {
  globals: TGlobalState,
};

declare type TSetTripsData = {
  type: "SET_TRIPS_DATA",
  value: Array<TTripData>,
};

declare type TAction = {
  type: string,
  value?: any,
};
