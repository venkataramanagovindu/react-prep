import React from "react";
import { Child } from "./Child";

export const Parent: React.FC = () => {
  console.log("Parent component rendered");

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Parent Component</h1>

      <Child/>
    </div>
  );
}