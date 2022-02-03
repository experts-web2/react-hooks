import React from "react";
import ReactDOM from "react-dom";
import { Memo } from "./memo-index";
import { Ref } from "./ref-index";
import { Reducer } from "./reducer-index";

ReactDOM.render(
  <>
    <Memo />
    <hr></hr>
    <Ref />
    <hr></hr>
    <Reducer />
  </>,
  document.getElementById("root")
);
