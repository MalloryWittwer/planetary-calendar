import React, { Component } from "react";

class Rotable extends Component {
  render() {
    const sw = "0.8";
    const sc = "#ccc"
    return (
      <div>
        <svg id={this.props.id} viewBox="0 0 200 200">
          <g stroke={sc} strokeWidth={sw}>
            <circle
              id="moon-outercircle"
              transform="rotate(-36.477)"
              cx="20.96"
              cy="139.86"
              r="99.37"
              fill="none"
            />
            <circle
              id="moon-orbit"
              transform="rotate(-36.477)"
              cx="20.96"
              cy="139.86"
              r="53.245"
              fill="none"
              stroke="#eee"
            />
            <circle
              id="moon-core"
              transform="rotate(-36.477)"
              cx="-17.369"
              cy="104.59"
              r="5.8461"
              fill={this.props.moonFill}
              stroke={this.props.moonStroke}
              strokeWidth="1.7711"
            />
          </g>
          <circle
            id="earth-core"
            transform="rotate(-36.477)"
            cx="20.96"
            cy="139.86"
            r="15"
            fill={this.props.planetFill}
            stroke={this.props.planetStroke}
            strokeWidth="1.7711"
          />
          <circle
            id="moon-innercircle"
            transform="rotate(-36.477)"
            cx="20.96"
            cy="139.86"
            r="66.584"
            fill="none"
            stroke="#ccc"
            strokeWidth="1.0"
          />
        </svg>
      </div>
    );
  }
}

export default Rotable;
