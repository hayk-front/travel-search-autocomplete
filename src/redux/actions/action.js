// @flow
import type { TTripData, TSetTripsData } from "../types";

export const setTripsData = (value: Array<TTripData>): TSetTripsData => {
  return {
    type: "SET_TRIPS_DATA",
    value,
  };
};
