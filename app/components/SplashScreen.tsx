"use client";

import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [logoIn, setLogoIn] = useState(false);

  useEffect(() => {
    // Trigger logo pop-in immediately
    setLogoIn(true);

    // Start fade slightly before unmount
    const fadeTimer = setTimeout(() => setFading(true), 1700);

    // Unmount splash after full duration
    const removeTimer = setTimeout(() => setVisible(false), 2000);

    
    

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg)]
        transition-all duration-300 ease-out
        ${fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}
      `}
    >
      <div className="flex items-center gap-4">
        {/* Logo with subtle pop-in */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
          alt="MyTube Logo"
          width={100}
          height={100}
          className={`transition-all duration-500 ease-out
            ${logoIn ? "scale-100 opacity-100" : "scale-75 opacity-0"}
          `}
        />

        {/* Splash text and progress bar */}
        <div className="w-96 text-center">
          <header className="text-3xl pb-2">MyTube</header>

          <ProgressBar
            completed={100}
            bgColor="#FF0000"
            baseBgColor="transparent"
            height="4px"
            borderRadius="999px"
            animateOnRender
            transitionDuration="2s"
            isLabelVisible={false}
          />

          <header className="text-2xl pt-4">by Cameron Frazier</header>
        </div>
      </div>
    </div>
  );
}
