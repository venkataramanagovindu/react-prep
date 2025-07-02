import React, { useContext } from "react";
import { GrandParentContext } from "./GrandParent";


export const Child: React.FC = () => {
    const text = useContext(GrandParentContext);
    console.log("Child component rendered with context:", text);
  return (
    <div style={{ border: "1px solid blue", padding: "10px" }}>
      <h1>CHild Component</h1>
    </div>
  );
};