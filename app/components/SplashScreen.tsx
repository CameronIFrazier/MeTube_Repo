"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center animate-fade-out">
        {/* YouTube Logo */}
        <div className="animate-logo-pop">
          <svg
            viewBox="0 0 24 24"
            className="h-24 w-24"
            fill="none"
          >
            <rect
              x="2"
              y="6"
              width="20"
              height="12"
              rx="3"
              fill="#FF0000"
            />
            <polygon points="10,9 16,12 10,15" fill="white" />
          </svg>
        </div>

        {/* Loading bar */}
        <div className="mt-4 h-1 w-32 overflow-hidden rounded bg-gray-200">
          <div className="h-full bg-red-600 animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
