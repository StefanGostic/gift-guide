import React from "react";

export type CircleColorName =
  | "pink"
  | "green"
  | "purple"
  | "magenta"
  | "darkPurple"
  | "navy"
  | "blue"
  | "orange"
  | "salmon"
  | "coral"
  | "brown"
  | "olive";

export type CircleColor =
  | "#d23975"
  | "#01a052"
  | "#9900a3"
  | "#fd0067"
  | "#420055"
  | "#1a1568"
  | "#1f74e6"
  | "#fa7125"
  | "#d46a7d"
  | "#fd8f44"
  | "#9d795f"
  | "#5e6542";

export const colorMap: Record<CircleColorName, CircleColor> = {
  pink: "#d23975",
  green: "#01a052",
  purple: "#9900a3",
  magenta: "#fd0067",
  darkPurple: "#420055",
  navy: "#1a1568",
  blue: "#1f74e6",
  orange: "#fa7125",
  salmon: "#d46a7d",
  coral: "#fd8f44",
  brown: "#9d795f",
  olive: "#5e6542",
};

export type CircleSize = "xs" | "sm" | "md" | "lg" | "xl";
export type CircleBlur = "none" | "blurry";

interface ColoredCircleProps {
  color: CircleColorName;
  size: CircleSize;
  blur: CircleBlur;
  className?: string;
}

const sizeMap = {
  xs: "8px",
  sm: "32px",
  md: "128px",
  lg: "156px",
  xl: "192px",
};

const ColoredCircle: React.FC<
  ColoredCircleProps & React.HTMLAttributes<HTMLDivElement>
> = ({ color, size, blur, className, style }) => {
  const circleSize = sizeMap[size];
  const hexColor = colorMap[color];
  const boxShadow = blur === "blurry" ? `0 0 10px 5px ${hexColor}` : "none";
  const isBlurry = blur === "blurry";

  return (
    <div
      style={{
        backgroundColor: hexColor,
        width: circleSize,
        height: circleSize,
        borderRadius: "50%",
        boxShadow: boxShadow,
        filter: isBlurry ? "blur(5px)" : "none",
        ...style,
      }}
      className={className}
    />
  );
};

export default ColoredCircle;
