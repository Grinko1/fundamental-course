import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
      <div style={{display:'flex',   textAlign:' center'}}>
        <button onClick={() => setCount((count) => count - 1)}>-1</button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>+1</button>
      </div>
    );
};

export default Counter;