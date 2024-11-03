import { useEffect, useRef } from "react";

export function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Calculate fade effect as the user scrolls down
        const fadePoint = windowHeight / 1.7; // Change this value to adjust when the video starts fading
        const opacity = 1 - Math.min(scrollY / fadePoint, 1); // Fade from 1 to 0

        videoRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);
  return (
    <div className="video-background" >
      <video ref={videoRef} autoPlay muted loop>
        <source className="video1" src="workingBRoll.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}
