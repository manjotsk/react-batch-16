import React, { useState } from "react";

const PropDrilling = () => {
  const [text, setText] = useState("Hello from prop prilling component");

  return (
    <div className="h-[30vh] m-10 border-red-500 border-8">
      <div>Hello Worlds from PropDrilling</div>
      <input onChange={(e) => setText(e.target.value)} />
      <ComponentOne text={text} />
    </div>
  );
};

export default PropDrilling;

export const ComponentOne = ({ text }) => {
  return (
    <div className="border-blue-500 border-8">
      ComponentOne
      <div>
        <ComponentTwo text={text} />
      </div>
    </div>
  );
};

export const ComponentTwo = ({ text }) => {
  return (
    <div className="border-yellow-500 border-8">
      ComponentTwo
      <ComponentThree text={text} />
    </div>
  );
};

export const ComponentThree = ({ text }) => {
  return (
    <div className="border-green-500 border-8">
      ComponentThree
      <div>
        <ComponentFour text={text} />
      </div>
    </div>
  );
};

export const ComponentFour = ({ text }) => {
  return (
    <div className="border-purple-500 border-8">
      ComponentFour
      <div>{text}</div>
    </div>
  );
};
