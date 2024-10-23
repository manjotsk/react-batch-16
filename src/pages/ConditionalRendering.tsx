import React, { useState } from "react";

const ConditionalRendering = () => {
  const [flag, setFlag] = useState(false);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");

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
      <br />
      3. using or operator <br />
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Enter Text"
      />
      <input
        type="text"
        value={text1}
        onChange={(e) => {
          setText1(e.target.value);
        }}
        placeholder="Enter Text1"
      />
      <h1 className="text-5xl">{text1 || text || "No Text Entered"}</h1>
    </div>
  );
};

export default ConditionalRendering;
