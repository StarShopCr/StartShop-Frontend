import React, { SVGProps } from "react";

export const FlameIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 41,
  height = 33,
  color = "#9354FF",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5212 19.9375C15.6539 19.9375 16.7402 19.5753 17.5411 18.9307C18.342 18.286 18.792 17.4117 18.792 16.5C18.792 14.6025 17.9378 13.75 17.0837 12.375C15.2523 9.42838 16.701 6.80075 20.5003 4.125C21.3545 7.5625 23.917 10.8625 27.3337 13.0625C30.7503 15.2625 32.4587 17.875 32.4587 20.625C32.4587 21.889 32.1493 23.1406 31.5484 24.3083C30.9474 25.4761 30.0666 26.5371 28.9561 27.4309C27.8457 28.3247 26.5274 29.0336 25.0766 29.5173C23.6257 30.001 22.0707 30.25 20.5003 30.25C18.9299 30.25 17.3749 30.001 15.9241 29.5173C14.4732 29.0336 13.1549 28.3247 12.0445 27.4309C10.9341 26.5371 10.0532 25.4761 9.45227 24.3083C8.8513 23.1406 8.54199 21.889 8.54199 20.625C8.54199 19.0396 9.2817 17.4707 10.2503 16.5C10.2503 17.4117 10.7003 18.286 11.5012 18.9307C12.3022 19.5753 13.3885 19.9375 14.5212 19.9375Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};