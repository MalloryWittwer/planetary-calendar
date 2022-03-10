import React, { Component } from "react";

const coordinates = [
  {
    id: 0,
    x: 14.700126,
    y: 80.67704,
    label: "Jan",
  },
  {
    id: 1,
    x: 35.623596,
    y: 43.531193,
    label: "Feb",
  },
  {
    id: 2,
    x: 72.382996,
    y: 21.927345,
    label: "Mar",
  },
  {
    id: 3,
    x: 116.07411,
    y: 21.358879,
    label: "Apr",
  },
  {
    id: 4,
    x: 152.25908,
    y: 42.862755,
    label: "May",
  },
  {
    id: 5,
    x: 175.11176,
    y: 80.67704,
    label: "Jun",
  },
  {
    id: 6,
    x: 176.22183,
    y: 123.78477,
    label: "Jul",
  },
  {
    id: 7,
    x: 152.99017,
    y: 160.3457,
    label: "Aug",
  },
  {
    id: 8,
    x: 115.56979,
    y: 181.90628,
    label: "Sep",
  },
  {
    id: 9,
    x: 73.102165,
    y: 182.48071,
    label: "Oct",
  },
  {
    id: 10,
    x: 35.034241,
    y: 160.9306,
    label: "Nov",
  },
  {
    id: 11,
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
                key={coords.id}
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
