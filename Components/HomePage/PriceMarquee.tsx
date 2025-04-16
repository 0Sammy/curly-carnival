"use client";

import { useEffect } from "react";

const CryptoWidget = () => {
  useEffect(() => {
    const scriptId = "lcw-script";

    // Prevent duplicate script injection
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
      script.defer = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="fixed w-full"
      style={{
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        className="livecoinwatch-widget-5"
        lcw-base="USD"
        lcw-color-tx="#999999"
        lcw-marquee-1="coins"
        lcw-marquee-2="none"
        lcw-marquee-items="10"
      ></div>
    </div>
  );
};

export default CryptoWidget;
