import { useEffect, useState } from "react";

export default function TestEffect() {
//   console.log("TestEffect component rendered");

  const [count, setCount] = useState(0);

  const returnEffect = useEffect(() => {
    console.log("useEffect in TestEffect component executed");
    
    // Cleanup function
    return () => {
      console.log("Cleanup in TestEffect component executed");
    };
  }, [count]); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h1>Test Effect Component</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
}