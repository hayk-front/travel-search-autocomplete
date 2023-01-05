// @flow
import React from "react";
import * as Styled from "./styled";
import { getIsValidDate } from "./helpers";

declare type Props = {
  setDate: (date: string) => void,
};

export const DatePicker = React.memo<*>(({ setDate }: Props) => {
  const onDateChange = (event) => {
    const isValidDate = getIsValidDate(event.target.value);

    if (isValidDate) {
      setDate(event.target.value);
      return;
    }
    setDate("");
  };

  return <Styled.DatePicker type="date" name="Date" onChange={onDateChange} />;
});
