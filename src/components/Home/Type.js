import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer!",
          "Freelancer!",
          "MERN Stack Developer!",
          "Swift, Solidity Developer!",
          "Blockchain Developer!",
          "Cloud Computing!",
          "Full Stack Development!",
          "Unity Developer!",
          "Figma!",
          "Android App Developer!",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
