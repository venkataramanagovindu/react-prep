import React, { useState } from "react";

import { Child } from "./Child";

export const Parent = () => {
    console.log("Parent component rendered")
    const [count, setCount] = useState(0);

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <Child title={ "Hello from Parent" } />
    </div>
  );
}