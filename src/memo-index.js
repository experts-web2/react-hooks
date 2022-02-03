import React, { useMemo, useState } from "react";

export const Memo = () => {
  const [number, setNumber] = useState(1);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const onClick = () => setNumber(1);
  const onAdd = () => setNumber(number + 1);

  return (
    <div>
      <h1>UseMemo</h1>
      <h3>
        Factorial of ({number}) is {factorial}
      </h3>
      <button onClick={onClick}>Reset</button>{" "}
      <button onClick={onAdd}>Add +1</button>
    </div>
  );
};

function factorialOf(n) {
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
