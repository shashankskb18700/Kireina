import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./Rating.css";
const Rating = ({ value, text }) => {
  return (
    <div className="rate">
      <h5 className="ratingName">{text}</h5>
      <CircularProgressbar
        value={value * 10}
        text={Number(value).toFixed(2) + "/10"}
        className="circBar"
        styles={{
          // Customize the root svg element
          root: {},
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: `rgb(120, 240,110)`, // don't divide here
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Customize transition animation
            transition: "stroke-dashoffset 0.5s ease 0s",
            // Rotate the path
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: "#fff",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Rotate the trail
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          // Customize the text
          text: {
            // Text color
            fill: "rgb(243, 0, 0)",
            // Text size
            fontSize: "17px",
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: "rgb(121, 247, 37)",
          },
        }}
      />
    </div>
  );
};

export default Rating;
