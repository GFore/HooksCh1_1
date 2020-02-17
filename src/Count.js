import React from 'react';

export function Count() {
  const [count, setCount] = React.useState(0);
  const renders = React.useRef(0);
  return (
    <div className='App'>
      <div style={{ padding: 10 }}>Count: {count}</div>
      <div style={{ padding: 10 }}>Renders: {renders.current++}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
    </div>
  );
}
