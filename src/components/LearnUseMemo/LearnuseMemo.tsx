import React from "react";

export const LearnUseMemo: React.FC = () => {
  console.log("LearnUseMemo component rendered");

  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);


//     const isEven  = () => {
//         var i = 0;
//         while (i < 1000000000) {i++}
//     console.log("Calculating isEven");
//     return count % 2 === 0;
//   }
    const isEven = React.useMemo(() => {
        var i = 0;
        while (i < 1000000000) {i++}
        console.log("Calculating isEven");
        return count % 2 === 0;
    }, [count]);

  
  return (
    <div>
      <h2>Learn UseMemo</h2>
      <p>This component demonstrates the use of useMemo for performance optimization.</p>
      {/* Add your useMemo examples here */}

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Increment Count2
      </button>

      <p>Count: {count}</p>
      <p>is Even: {isEven ? 'Even' : 'Odd'} </p>
      <p>Count2: {count2}</p>
    </div>
  );
}