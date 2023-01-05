// @flow

export const getIsValidDate = (inputDate: string): boolean => {
  const selectedDayTimestamp = new Date(inputDate).getTime();
  const todayTimestamp = new Date().getTime();

  if (selectedDayTimestamp <= todayTimestamp) {
    return false;
  }
  return true;
};
