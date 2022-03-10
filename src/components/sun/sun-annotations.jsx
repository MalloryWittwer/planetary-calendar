import React, { Component } from "react";

const coordinates = [
  {
    x: 13.209093,
    y: 94.197884,
    label: "Jan",
  },
  {
    x: 35.623596,
    y: 43.531193,
    label: "Feb",
  },
  {
    x: 23.843937,
    y: 62.285862,
    label: "Mar",
  },
  {
    x: 33.765167,
    y: 48.575062,
    label: "Apr",
  },
  {
    x: 46.073666,
    y: 37.07642,
    label: "May",
  },
  {
    x: 60.569897,
    y: 28.413776,
    label: "Jun",
  },
  {
    x: 76.497574,
    y: 22.798801,
    label: "Jul",
  },
  {
    x: 93.271935,
    y: 20.499577,
    label: "Aug",
  },
  {
    x: 110.16148,
    y: 21.61713,
    label: "Sep",
  },
  {
    x: 123.90833,
    y: 26.09885,
    label: "Oct",
  },
  {
    x: 139.09743,
    y: 33.780109,
    label: "Nov",
  },
  {
    x: 139.09743,
    y: 33.780109,
    label: "Dec",
  },
];

class SunAnnotations extends Component {
  render() {
    return (
      <div>
        <svg id="moon-annotations" viewBox="0 0 200 200">
          {coordinates.map((coords) => {
            return (
              <text
                key={Number.parseInt(coords.label, 10) - 1}
                transform="rotate(-.76249)"
                x={coords.x}
                y={coords.y}
              >
                <tspan fill="#cccccc" fontSize="7px" strokeWidth=".11">
                  {coords.label}
                </tspan>
              </text>
            );
          })}
          <text x="91" y="103">
            <tspan fill="#b9dbff" fontSize="8px">
              Sun
            </tspan>
          </text>
        </svg>
      </div>
    );
  }
}

export default SunAnnotations;
