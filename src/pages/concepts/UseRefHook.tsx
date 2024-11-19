import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const increaseWaliRef = useRef<HTMLButtonElement>();
  const decreaseWaliRef = useRef();

  const [number, setNumber] = useState(0);
  useEffect(() => {
    increaseWaliRef.current?.focus();

    return () => {};
  }, [increaseWaliRef]);

  return (
    <div className="container h-screen justify-center align-middle">
      <div className="flex w-full justify-center text-5xl">
        <div>{number}</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <button
          ref={increaseWaliRef}
          onClick={() => {
            setNumber(number + 1);
            decreaseWaliRef.current?.focus();
          }}
        >
          increase
        </button>
        <button
          onClick={() => {
            setNumber(number - 1);
            increaseWaliRef.current?.focus();
          }}
          ref={decreaseWaliRef}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default UseRefHook;
