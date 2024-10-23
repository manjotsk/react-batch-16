import React, { useState } from "react";

const ConditionalRendering = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      1. using ternary operator{" "}
      <button
        onClick={() => {
          setFlag((previousFlag) => {
            return !previousFlag;
          });
        }}
      >
        switch
      </button>
      {flag ? (
        <div className="bg-red-400 text-white font-bold text-5xl text-center rounded-full p-10">
          hello
        </div>
      ) : (
        <div className="bg-blue-400 text-white font-bold text-5xl text-center rounded-full p-10">
          hello
        </div>
      )}
      2. using and operator{" "}
      <button
        onClick={() => {
          setFlag((previousFlag) => {
            return !previousFlag;
          });
        }}
      >
        switch
      </button>
      {flag && (
        <div className="bg-red-400 text-white font-bold text-5xl text-center rounded-full p-10">
          hello
        </div>
      )}
      {!flag && (
        <div className="bg-blue-400 text-white font-bold text-5xl text-center rounded-full p-10">
          hello
        </div>
      )}
    </div>
  );
};

export default ConditionalRendering;
