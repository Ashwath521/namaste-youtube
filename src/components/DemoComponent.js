import React, { useMemo, useState, useCallback } from "react";
import { findPrime } from "../utils/helper";
const DemoComponent = () => {
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  // without useMemo it freeze the ui
  // const prime = findPrime(text);

  // with use memo it din't freeze the ui
  // useMemo take to argument one is cache the result of a calculation & second
  //  is dependency based on dependency changes it cache the result
  // in this example it cache the result of find number function whenever text dependency it changes
  const prime = useMemo(() => findPrime(text), [text]);
  const CountInc = useCallback(() => {
    setCount(count + 1);
    console.log("count: " + count);
  }, [count]);
  return (
    <div
      className={
        "w-96 p-2 border border-black h-96" +
        (toggle && "text-white bg-gray-400")
      }
    >
      <input
        className="border border-black w-72 rounded-lg shadow-lg"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <h1 className="font-bold text-xl">Nth prime display:{prime}</h1>
      <button
        onClick={() => {
          CountInc();
        }}
      >
        Count
      </button>
    </div>
  );
};

export default DemoComponent;
