"use client";

const Button = ({ color, activeImage, setActiveImage, relatedImage }) => {
  return (
    <div
      onClick={() => setActiveImage(relatedImage)}
      style={{ backgroundColor: color }}
      className={`dots
        ${activeImage === relatedImage ? "border-3" : ""}`}
    />
  );
};

export default Button;
