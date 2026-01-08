import React, { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

interface SnowfallAnimationProps {
  style?: React.CSSProperties;
}

const SnowfallAnimation: React.FC<SnowfallAnimationProps> = ({ style }) => {
  const defaultStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 9999,
    ...style,
  };

  const [customImage, setCustomImage] = useState<HTMLImageElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for DOM to be fully loaded
    const initSnowfall = () => {
      const img = new Image();
      img.src = "/images/snow-icon.svg";
      img.width = 30;
      img.height = 30;
      
      img.onload = () => {
        console.log("Image loaded successfully!", img.src);
        setCustomImage(img);
        // Small delay to ensure everything is rendered
        setTimeout(() => {
          setIsReady(true);
        }, 100);
      };
      
      img.onerror = (e) => {
        console.error("Failed to load SVG image!", e);
        console.log("Attempted path:", img.src);
        // Fallback: show snowfall without custom image
        setTimeout(() => {
          setIsReady(true);
        }, 100);
      };
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      initSnowfall();
    } else {
      // Wait for window load event
      window.addEventListener("load", initSnowfall);
      return () => window.removeEventListener("load", initSnowfall);
    }
  }, []);

  // Don't render snowfall until everything is ready
  if (!isReady) {
    return null;
  }

  return (
    <div style={defaultStyle}>
      <Snowfall
        color="#dee4fd"
        snowflakeCount={15}
        images={customImage ? [customImage] : undefined}
        radius={customImage ? [15, 20] : [0.5, 3.0]}
      />
    </div>
  );
};

export default SnowfallAnimation;