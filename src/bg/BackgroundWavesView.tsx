import React, {ReactNode, useEffect, useRef, useState } from "react";
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

  const contentRef = useRef(null);
  const canvasRef = useRef(null);

  const [height, setHeight] = useState(0)
  useEffect(() => {
    const contentDiv = contentRef?.current as any;
    const bgSvg = canvasRef?.current as any;

    if (contentDiv.clientHeight > bgSvg.clientHeight) {
      bgSvg.style.height = contentDiv.clientHeight;
    }
  })
  
  return (
    <>
      <div className="relative w-screen h-screen font-sans text-white text-sm overflow-x-hidden leading-tight">
        <div className="z-0 top-0 left-0 w-full h-full absolute">
          <svg
            className="canvas"
            ref={canvasRef}
            viewBox="0 0 1000 3500"
            preserveAspectRatio="xMaxYMid slice"
          ></svg>
        </div>
        <div className="relative" ref={contentRef}>
          <div className={`lg:ml-6 lg:mr-6 ${className}`}>{children}</div>
        </div>
      </div>
    </>
  );
};
