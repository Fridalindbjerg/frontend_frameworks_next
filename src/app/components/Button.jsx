"use client";

const Button = ({ color, activeImage, setActiveImage, relatedImage }) => {
  return (
    <div
      onClick={() => setActiveImage(relatedImage)}
      style={{ backgroundColor: color }}
      className={`h-5 w-5 rounded-full ${activeImage === relatedImage ? "border-[2px] border-white shadow-2xs outline-offset-[-3px]" : ""}`}
    />
  );
};

export default Button;
