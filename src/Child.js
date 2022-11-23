import React, { memo, useMemo } from "react";
import { isEqual } from "lodash";
import "./Child.css";

const Child = (props) => {
  console.log("Child Rendered");
  const { counter, updateCounter } = props;

  const number = useMemo(() => {
    let i = 0;
    while (i < 1_000_000_000) i++;
    return i;
  }, []);

  return (
    <div className="Child">
      <h1>
        Child: {number} {counter}
      </h1>
      <button onClick={updateCounter}>+1</button>
    </div>
  );
};

export default memo(Child, isEqual);
