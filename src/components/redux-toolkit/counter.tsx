import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../state/counterSlice";

const Counter: React.FC = () => {
  console.log("Counter component rendered");

  // Simulating a counter state
const counter = useSelector((state: any) => state.counter);
  const count = counter.value;
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid green", padding: "10px" }}>
      <h1>Counter Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button> {/* Corrected dispatch usage */} 
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;