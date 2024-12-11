import React, { useState } from "react";

const HelloCounter = React.memo((props) => {
  console.log("HelloCounter Component rendered");
  return <div>Hello World from Memo: {props.counter}</div>;
});

const Memo = () => {
  console.log("Memo Component rendered");
  const [counter, setCounter] = useState(0);

  const [onOffFlag, setOnOffFlag] = useState(false);

  return (
    <div className={`${onOffFlag ? "bg-white" : "bg-black"}`}>
      <HelloCounter counter={counter}></HelloCounter>
      <br />
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increase
      </button>

      <button
        onClick={() => {
          setOnOffFlag(!onOffFlag);
        }}
      >
        switch
      </button>
    </div>
  );
};

export default Memo;
