import { useState, useCallback } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  // every time app is rerendered, this array is redefined, causing child to also rerender
  // unless you use isEqual from lodash in memo params
  const array = [1, 2, 3, 4, 5];

  // const updateCounter = useCallback(() => setCounter(counter + 1), [counter]);
  const updateCounter = useCallback(() => setCounter((c) => c + 1), []);

  // console.log("App Rendered");
  return (
    <div className="App">
      <h1>Hello from Parent: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+1</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Child array={array} counter={counter} updateCounter={updateCounter} />
    </div>
  );
}

export default App;
