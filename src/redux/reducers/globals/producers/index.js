// @flow
import type { TSomeAction, TGlobalState } from "../../../types";
/**
 * @export
 * @description - Function to set trips data after successfully fetching.
 */
export const setTripsDataProducer =
  (action: TSetTripsData) => (draft: TGlobalState) => {
    draft.tripsData = action.value;
  };
