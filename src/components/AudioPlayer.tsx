import React, { forwardRef, useImperativeHandle, useState } from "react";

type Props = {};

const pause = "⏸️";
const play = "▶️";

const AudioPlayer = (props: Props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  const handlePause = () => {
    setIsPlaying(false);
  };

  useImperativeHandle(ref, () => ({
    handlePlay,
    handlePause,
  }));

  return (
    <div className="flex  flex-col items-center justify-center ">
      <div className="bg-red-100 p-10 rounded-lg">
        <h1>Audio Player</h1>
        {isPlaying ? (
          <button onClick={handlePause}>{pause}</button>
        ) : (
          <button onClick={handlePlay}>{play}</button>
        )}
      </div>
    </div>
  );
};

export default forwardRef(AudioPlayer);
