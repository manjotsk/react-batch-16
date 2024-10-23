import React from "react";

const redFlag = !true;

const ConditionalRendering = () => {
  return (
    <div>
      using ternary operator
      {redFlag ? (
        <div className="bg-red-400 text-white font-bold text-5xl text-center rounded-full p-10">
          hello
        </div>
      ) : (
        <div className="bg-blue-400 text-white font-bold text-5xl text-center rounded-full p-10">
          hello
        </div>
      )}
    </div>
  );
};

export default ConditionalRendering;
