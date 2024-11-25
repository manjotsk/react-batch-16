import React, { useEffect, useState } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("Hello from useEffect");

    return () => {
      console.log("Goodbye from useEffect");
    };
  }, []);

  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("state change hogyi bro: " + count);

    return () => {
      alert("state change hogyi bro. mai ja reaha haan: " + count);
    };
  }, [count]);

  return (
    <div>
      Hello world from Use Effect
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {" "}
        minus
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        plus
      </button>
    </div>
  );
};

export default UseEffect;
