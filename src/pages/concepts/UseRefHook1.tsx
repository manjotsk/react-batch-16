import React, { useRef } from "react";

const UseRefHook1 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current?.select();
          const inputText = inputRef.current?.value;
          navigator.clipboard.writeText(inputText || "");
        }}
      >
        Copy
      </button>
    </div>
  );
};

export default UseRefHook1;
