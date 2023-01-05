// @flow
import React from "react";
import { Header } from "./containers/Header";
import Main from "./containers/Main";

export const App = (): React$Node<*> => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};
