import React, { useEffect, useState } from "react";

function ReactUseEffect() {
  const [counter, setCounter] = useState(0);
  const [pointer, setPointer] = useState(20);

  function increaseCount() {
    setCounter(counter + 5);
  }
  function decreasePointer(){
    setPointer(pointer-5);
  }

  useEffect(() => {
    console.log("Counter " + counter);
  }, [counter]);

  return (
    <div>
      <h1 style={{ color: "red" }}>ReactUseEffect</h1>
      <h2>Counter Value = {counter}</h2>
      <h2>Counter Value = {pointer}</h2>
      <button onClick={increaseCount}>Increase by 5</button>
      <button onClick={decreasePointer}>decresae by 5</button>
    </div>
  );
}

export default ReactUseEffect;
