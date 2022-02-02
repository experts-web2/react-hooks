import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Memo } from "./useMemo";
import { Ref } from "./useRef";
ReactDOM.render(
  <>
    <Memo />
    <b></b>
    <Ref />
  </>,
  document.getElementById("root")
);
