// @flow
import { createSelector } from "reselect";
import type { TGlobalState, TTripData } from "../types";

export const getState = (state) => state.globals;

export const getTripsData = createSelector(
  getState,
  (state: TGlobalState): Array<TTripData> => state.tripsData
);
