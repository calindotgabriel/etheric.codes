import React, {ReactNode, useEffect } from "react";
import WaveGenerator from "./WaveGenerator";

type BackgroundWavesViewProps = {
  children: ReactNode;
  className?: string
};

export const BackgroundWavesView: React.FC<BackgroundWavesViewProps> = ({ children, className }) => {
  useEffect(() => {
    const wavesViewService = WaveGenerator.getInstance();
    wavesViewService.generate();
  });
  return (
    <>
      <div className="relative w-screen h-screen font-sans text-white text-sm">
        <div className="z-0 top-0 left-0 w-full h-full absolute">
          <svg
            className="canvas"
            viewBox="0 0 1000 2500"
            preserveAspectRatio="xMaxYMid slice"
          ></svg>
        </div>
        <div className="relative">
          <div className={`ml-6 mr-6 ${className}`}>{children}</div>
        </div>
      </div>
    </>
  );
};
