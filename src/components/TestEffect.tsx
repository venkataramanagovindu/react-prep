import React from "react";
import { useEffect, useState } from "react";

export default function TestEffect() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("useEffect in TestEffect component executed");
    
    // Cleanup function
    return () => {
      console.log("Cleanup in TestEffect component executed");
    };
  }, [count]); // Dependency array means this effect runs when 'count' changes

  return (
    <div>
      <h1>Test Effect Component</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
}
