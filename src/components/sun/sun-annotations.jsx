import React, { Component } from "react";

const coordinates = [
  {
    x: 14.700126,
    y: 80.67704,
    label: "Jan",
  },
  {
    x: 35.623596,
    y: 43.531193,
    label: "Feb",
  },
  {
    x: 72.382996,
    y: 21.927345,
    label: "Mar",
  },
  {
    x: 116.07411,
    y: 21.358879,
    label: "Apr",
  },
  {
    x: 152.25908,
    y: 42.862755,
    label: "May",
  },
  {
    x: 175.11176,
    y: 80.67704,
    label: "Jun",
  },
  {
    x: 176.22183,
    y: 123.78477,
    label: "Jul",
  },
  {
    x: 152.99017,
    y: 160.3457,
    label: "Aug",
  },
  {
    x: 115.56979,
    y: 181.90628,
    label: "Sep",
  },
  {
    x: 73.102165,
    y: 182.48071,
    label: "Oct",
  },
  {
    x: 35.034241,
    y: 160.9306,
    label: "Nov",
  },
  {
    x: 13.679568,
    y: 123.69225,
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
                transform="scale(.99998 1)"
                x={coords.x}
                y={coords.y}
              >
                <tspan fill="#cccccc" fontSize="7px" strokeWidth=".11">
                  {coords.label}
                </tspan>
              </text>
            );
          })}
          <text x="93" y="103">
            <tspan fill="rgb(250, 249, 244)" fontSize="8px">
              Sun
            </tspan>
          </text>
        </svg>
      </div>
    );
  }
}

export default SunAnnotations;
