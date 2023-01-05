// @flow
// Global Pure Functions Here

declare type QSObj = Object;

export const replaceApiVariables = (
  apiPrefix: string,
  replaceVariable: string | number
): string => apiPrefix.replace("%d", `${replaceVariable}`);
