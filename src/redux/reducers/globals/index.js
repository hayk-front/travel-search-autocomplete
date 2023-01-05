/* @flow */

import { produce } from "immer";
import * as p from "./producers";
import type { TState, TAction, TGlobalState } from "../../types";

const initialState: TGlobalState = {
  tripsData: null,
};

const globals = (state: TState = initialState, action: TAction): any => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case "SET_TRIPS_DATA":
        p.setTripsDataProducer(action)(draft);
        break;
    }
  });
};

export default globals;
