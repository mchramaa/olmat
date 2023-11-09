import React, { useEffect } from "react";
import lottie from "lottie-web";

const LottiePlayer = ({ animationData }) => {
  const containerRef = React.useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to true if you want the animation to play automatically
      animationData: animationData, // JSON data for your Lottie animation
    });

    return () => {
      anim.destroy(); // Clean up animation when the component unmounts
    };
  }, [animationData]);

  return <div ref={containerRef} />;
};

export default LottiePlayer;
