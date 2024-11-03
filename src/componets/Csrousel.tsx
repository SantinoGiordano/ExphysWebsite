import { useState, useEffect } from "react";

const images = [
  "heatherAndJill.jpg", // Replace these with your image URLs
  "meetingThreePeople.jpg",
  "tredmillConvo.jpg",
  "biker.jpeg"
];

export function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically rotate the images every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 3000ms = 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-image ${index === currentImageIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ))}
    </div>
  );
}