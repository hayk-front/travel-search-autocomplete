// @flow
import React from "react";
import * as Styles from "./styles";

export const TrinetiumLogo = React.memo(() => {
  return (
    <div style={Styles.logoWrapper} onClick={() => location.reload()}></div>
  );
});
