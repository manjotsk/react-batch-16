import React, { useRef } from "react";
import AudioPlayer from "../components/AudioPlayer";

const AudioPage = () => {
  const audioRef = useRef();
  return (
    <div>
      <div className="bg-blue-200">
        <AudioPlayer ref={audioRef} />
        <button
          onClick={() => {
            audioRef.current.handlePlay();
          }}
        >
          Bahar Wala play Button
        </button>
        <button
          onClick={() => {
            audioRef.current.handlePause();
          }}
        >
          Bahar Wala pause Button
        </button>
      </div>
    </div>
  );
};

export default AudioPage;
