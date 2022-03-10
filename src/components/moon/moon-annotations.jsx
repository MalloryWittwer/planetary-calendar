import React, { Component } from "react";

const coordinates = [
  {
    x: 13.209093,
    y: 94.197884,
    label: "1",
  },
  {
    x: 16.919077,
    y: 77.754463,
    label: "2",
  },
  {
    x: 23.843937,
    y: 62.285862,
    label: "3",
  },
  {
    x: 33.765167,
    y: 48.575062,
    label: "4",
  },
  {
    x: 46.073666,
    y: 37.07642,
    label: "5",
  },
  {
    x: 60.569897,
    y: 28.413776,
    label: "6",
  },
  {
    x: 76.497574,
    y: 22.798801,
    label: "7",
  },
  {
    x: 93.271935,
    y: 20.499577,
    label: "8",
  },
  {
    x: 110.16148,
    y: 21.61713,
    label: "9",
  },
  {
    x: 123.90833,
    y: 26.09885,
    label: "10",
  },
  {
    x: 139.09743,
    y: 33.780109,
    label: "11",
  },
  {
    x: 152.1445,
    y: 44.367588,
    label: "12",
  },
  {
    x: 162.98224,
    y: 57.296772,
    label: "13",
  },
  {
    x: 170.85425,
    y: 72.196663,
    label: "14",
  },
  {
    x: 175.7399,
    y: 88.33329,
    label: "15",
  },
  {
    x: 177.13013,
    y: 105.19924,
    label: "16",
  },
  {
    x: 175.19328,
    y: 121.98649,
    label: "17",
  },
  {
    x: 169.87706,
    y: 138.01181,
    label: "18",
  },
  {
    x: 161.47643,
    y: 152.65161,
    label: "19",
  },
  {
    x: 150.481,
    y: 165.29271,
    label: "20",
  },
  {
    x: 137.11115,
    y: 175.47624,
    label: "21",
  },
  {
    x: 121.68883,
    y: 182.67876,
    label: "22",
  },
  {
    x: 105.31223,
    y: 186.60536,
    label: "23",
  },
  {
    x: 88.339302,
    y: 187.25363,
    label: "24",
  },
  {
    x: 71.766418,
    y: 184.38521,
    label: "25",
  },
  {
    x: 55.96299,
    y: 178.2758,
    label: "26",
  },
  {
    x: 41.801468,
    y: 169.17555,
    label: "27",
  },
  {
    x: 29.729877,
    y: 157.29877,
    label: "28",
  },
  {
    x: 20.319727,
    y: 143.2934,
    label: "29",
  },
  {
    x: 13.959345,
    y: 127.83846,
    label: "30",
  },
  {
    x: 10.88936,
    y: 111.07577,
    label: "31",
  },
];

class MoonAnnotations extends Component {
  render() {
    return (
      <div>
        <svg id="moon-annotations" viewBox="0 0 200 200">
          {coordinates.map((coords) => {
            if (
              this.props.month === "February" &&
              ["29", "30", "31"].includes(coords.label)
            ) {
              return;
            } else if (
              ["April", "June", "September", "November"].includes(
                this.props.month
              ) &&
              ["31"].includes(coords.label)
            ) {
              return;
            } else {
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
            }
          })}
          <text x="91" y="103">
            <tspan fill="#b9dbff" fontSize="8px">
              Earth
            </tspan>
          </text>
        </svg>
      </div>
    );
  }
}

export default MoonAnnotations;
