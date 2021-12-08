import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Contact</h1>
      <p><button onClick={() => setCount(count + 1)}>Click Me</button></p>
      <p>Count: {count}</p>
    </>
  );
};

export default App;
