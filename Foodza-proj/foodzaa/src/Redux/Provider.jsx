// import { use client } from "react";
import React from "react";
import store from "./Store";
import { Provider } from "react-redux";

const Prvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Prvider;