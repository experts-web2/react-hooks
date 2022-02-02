import React, { useRef } from "react";

export const Ref = () => {
  const textInput = useRef();
  console.log(textInput);
  const focusTextInput = () => textInput.current.focus();

  return (
    <>
      <h1>UseRef</h1>
      <input type="text" ref={textInput} />
      <button onClick={focusTextInput}>Click to focus on input</button>
    </>
  );
};
