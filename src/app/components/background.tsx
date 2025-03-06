import React from "react";
import ColoredCircle, {
  CircleBlur,
  CircleColorName,
  CircleSize,
} from "./colored-circle";

const circles: {
  color: CircleColorName;
  size: CircleSize;
  blur: CircleBlur;
  top: string;
  left: string;
}[] = [
  { color: "pink", size: "xs", blur: "none", top: "10vh", left: "10vw" },
  { color: "green", size: "sm", blur: "blurry", top: "20vh", left: "30vw" },
  { color: "purple", size: "md", blur: "none", top: "30vh", left: "50vw" },
  { color: "magenta", size: "lg", blur: "blurry", top: "-6vh", left: "70vw" },
  { color: "darkPurple", size: "xl", blur: "none", top: "50vh", left: "90vw" },
  { color: "navy", size: "xs", blur: "blurry", top: "60vh", left: "20vw" },
  { color: "blue", size: "sm", blur: "none", top: "70vh", left: "40vw" },
  { color: "orange", size: "md", blur: "blurry", top: "80vh", left: "60vw" },
  { color: "salmon", size: "lg", blur: "none", top: "90vh", left: "80vw" },
  { color: "coral", size: "xl", blur: "blurry", top: "10vh", left: "90vw" },
  { color: "brown", size: "xs", blur: "none", top: "20vh", left: "70vw" },
  { color: "olive", size: "sm", blur: "blurry", top: "30vh", left: "50vw" },
  { color: "pink", size: "md", blur: "none", top: "40vh", left: "30vw" },
  { color: "green", size: "lg", blur: "blurry", top: "20vh", left: "10vw" },
  { color: "purple", size: "xl", blur: "none", top: "60vh", left: "80vw" },
  { color: "magenta", size: "xs", blur: "blurry", top: "70vh", left: "60vw" },
  { color: "darkPurple", size: "sm", blur: "none", top: "80vh", left: "40vw" },
  { color: "navy", size: "md", blur: "blurry", top: "90vh", left: "20vw" },
  { color: "blue", size: "lg", blur: "none", top: "10vh", left: "50vw" },
  { color: "orange", size: "xl", blur: "blurry", top: "64vh", left: "2vw" },

  // New xs circles
  { color: "pink", size: "xs", blur: "blurry", top: "15vh", left: "15vw" },
  { color: "green", size: "xs", blur: "none", top: "25vh", left: "35vw" },
  { color: "purple", size: "xs", blur: "blurry", top: "35vh", left: "55vw" },
  { color: "magenta", size: "xs", blur: "none", top: "45vh", left: "75vw" },
  {
    color: "darkPurple",
    size: "xs",
    blur: "blurry",
    top: "55vh",
    left: "95vw",
  },
  { color: "navy", size: "xs", blur: "none", top: "65vh", left: "25vw" },
  { color: "blue", size: "xs", blur: "blurry", top: "75vh", left: "45vw" },
  { color: "orange", size: "xs", blur: "none", top: "85vh", left: "65vw" },
  { color: "salmon", size: "xs", blur: "blurry", top: "95vh", left: "85vw" },
  { color: "coral", size: "xs", blur: "none", top: "5vh", left: "95vw" },
  { color: "brown", size: "xs", blur: "blurry", top: "15vh", left: "75vw" },
  { color: "olive", size: "xs", blur: "none", top: "25vh", left: "55vw" },
  { color: "pink", size: "xs", blur: "blurry", top: "35vh", left: "35vw" },
  { color: "green", size: "xs", blur: "none", top: "45vh", left: "15vw" },
  { color: "purple", size: "xs", blur: "blurry", top: "55vh", left: "85vw" },
  { color: "magenta", size: "xs", blur: "none", top: "65vh", left: "65vw" },
  {
    color: "darkPurple",
    size: "xs",
    blur: "blurry",
    top: "75vh",
    left: "45vw",
  },
  { color: "navy", size: "xs", blur: "none", top: "85vh", left: "25vw" },
  { color: "blue", size: "xs", blur: "blurry", top: "95vh", left: "5vw" },
  { color: "orange", size: "xs", blur: "none", top: "5vh", left: "45vw" },
];

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-1">
      {circles.map((circle, index) => (
        <ColoredCircle
          key={index}
          color={circle.color}
          size={circle.size}
          blur={circle.blur}
          className="absolute"
          style={{ top: circle.top, left: circle.left }}
        />
      ))}
    </div>
  );
};

export default Background;
