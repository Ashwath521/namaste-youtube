import React, { useRef, useState, useId } from "react";

const Demo2 = () => {
  let x = 10;
  let y = useRef(0);
  const [count, setCount] = useState(0);
  const id = useId();
  console.log(id);

  return (
    <div className="w-96 p-2 border border-black h-96 ml-10">
      <button
        className="p-2 bg-blue-900 rounded-lg"
        onClick={() => {
          x = x + 1;
          console.log("inside jsx", x);
        }}
      >
        Inc X
      </button>
      <button
        className="p-2 bg-blue-900 rounded-lg"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        State ={count}
      </button>

      <button
        className="p-2 bg-blue-900 rounded-lg"
        onClick={() => {
          y.current = y.current + 1;
          console.log(y.current);
        }}
      >
        Ref = {y.current}
      </button>
      <h1>X={x}</h1>
    </div>
  );
};

export default Demo2;
