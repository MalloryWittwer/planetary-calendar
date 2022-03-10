import React, { Component } from "react";
import MoonRotable from "./moon/moon-rotable";

const monthDico = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

class SunDiagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonthID: 0,
    };
  }

  handleHover(area) {
    this.props.setHoverTrue();
    const angle = Number.parseInt(
      Number.parseFloat(area.id, 10) * 30 + 9.2,
      10
    );
    document.getElementById(
      "sun-rotable"
    ).style.transform = `rotate(${angle}deg)`;
    const month = monthDico[area.id];
    this.props.monthHoverFnct(month);
  }

  handleMouseOut() {
    const angle = Number.parseInt(
      Number.parseFloat(this.state.selectedMonthID, 10) * 30 + 9.2,
      10
    );
    document.getElementById(
      "sun-rotable"
    ).style.transform = `rotate(${angle}deg)`;
    this.props.setHoverFalse();
  }

  handleClick(area) {
    document.querySelectorAll(".areas-sun path").forEach((area) => {
      area.classList.remove("active");
    });
    area.classList.add("active");
    const month = monthDico[area.id];
    this.props.monthClickFnct(month);
    this.setState({ selectedMonthID: area.id });
  }

  adjustSize() {
    const calendar = document.querySelector(".calendar");
    const calendarWidth = calendar.getBoundingClientRect().width;
    const diagram = document.querySelector("#sun-diagram");
    diagram.style.width = `${Number.parseInt(calendarWidth * 0.4)}px`;
    diagram.style.height = `${Number.parseInt(calendarWidth * 0.4)}px`;
  }

  componentDidMount() {
    document.querySelectorAll(".areas-sun path").forEach((area) => {
      area.addEventListener("mouseover", (e) => this.handleHover(area));
      area.addEventListener("mouseout", (e) => this.handleMouseOut());
      area.addEventListener("click", (e) => this.handleClick(area));
    });
    document.getElementById("sun-rotable").style.transform = `rotate(9.2deg)`;
    window.addEventListener("resize", this.adjustSize);
    this.adjustSize();
  }

  render() {
    return (
      <div className="diagram" id="sun-diagram">
        <MoonRotable 
          id={"sun-rotable"}
          moonStroke={"#b9dbff"}
          moonFill={"#81beff"}
          planetStroke={"#fea"}
          planetFill={"#ffe680"}
        />

        <svg
          id="sun-annotations"
          width="200mm"
          height="200mm"
          version="1.1"
          viewBox="0 0 200 200"
        >
          <g
            fill="#b3b3b3"
            fontFamily="sans-serif"
            fontSize="6.1114px"
            letterSpacing="0px"
            strokeWidth=".15279"
          >
            <text transform="scale(.99998 1)" x="35.623596" y="43.531193">
              <tspan
                x="35.623596"
                y="43.531193"
                fill="#b3b3b3"
                strokeWidth=".15279"
              >
                Feb
              </tspan>
            </text>
            <text transform="scale(.99998 1)" x="72.382996" y="21.927345">
              <tspan
                x="72.382996"
                y="21.927345"
                fill="#b3b3b3"
                strokeWidth=".15279"
              >
                Mar
              </tspan>
            </text>
            <text transform="scale(.99998 1)" x="116.07411" y="21.358879">
              <tspan
                x="116.07411"
                y="21.358879"
                fill="#b3b3b3"
                strokeWidth=".15279"
              >
                Apr
              </tspan>
            </text>
            <text transform="scale(.99998 1)" x="152.25908" y="42.862755">
              <tspan
                x="152.25908"
                y="42.862755"
                fill="#b3b3b3"
                strokeWidth=".15279"
              >
                May
              </tspan>
            </text>
            <text transform="scale(.99998 1)" x="175.11176" y="80.67704">
              <tspan
                x="175.11176"
                y="80.67704"
                fill="#b3b3b3"
                strokeWidth=".15279"
              >
                Jun
              </tspan>
            </text>
            <text transform="scale(.99998 1)" x="176.22183" y="123.78477">
              <tspan
                x="176.22183"
                y="123.78477"
                fill="#b3b3b3"
                strokeWidth=".15279"
              >
                Jul
              </tspan>
            </text>
            <text transform="scale(.99998 1)" x="152.99017" y="160.3457">
              <tspan
                x="152.99017"
                y="160.3457"
                fill="#b3b3b3"
                strokeWidth=".15279"
              >
                Aug
              </tspan>
            </text>
            <text transform="scale(.99998 1)" x="115.56979" y="181.90628">
              <tspan
                x="115.56979"
                y="181.90628"
                fill="#b3b3b3"
                strokeWidth=".15279"
              >
                Sep
              </tspan>
            </text>
            <text transform="scale(.99998 1)" x="73.102165" y="182.48071">
              <tspan
                x="73.102165"
                y="182.48071"
                fill="#b3b3b3"
                strokeWidth=".15279"
              >
                Oct
              </tspan>
            </text>
            <text transform="scale(.99998 1)" x="35.034241" y="160.9306">
              <tspan
                x="35.034241"
                y="160.9306"
                fill="#b3b3b3"
                strokeWidth=".15279"
              >
                Nov
              </tspan>
            </text>
            <text transform="scale(.99998 1)" x="13.679568" y="123.69225">
              <tspan
                x="13.679568"
                y="123.69225"
                fill="#b3b3b3"
                strokeWidth=".15279"
              >
                Dec
              </tspan>
            </text>
            <text transform="scale(.99998 1)" x="14.700126" y="80.67704">
              <tspan
                x="14.700126"
                y="80.67704"
                fill="#b3b3b3"
                fontFamily="sans-serif"
                strokeWidth=".15279"
              >
                Jan
              </tspan>
            </text>
          </g>
        </svg>

        {/* AREAS */}
        <svg width="200mm" height="200mm" version="1.1" viewBox="0 0 200 200">
          <g
            className="areas areas-sun"
            transform="translate(-257.6 155.36)"
            fill="none"
          >
            <path
              id="0"
              d="m271.82-104.88c-0.30996 0.10116-0.61325 0.20384-0.91777 0.30644a99.687 99.69 0 0 0-12.992 48.5c0.21241 0.2383 0.42292 0.47648 0.64078 0.71624h31.977a67.067 67.069 0 0 1 8.986-33.534z"
            />
            <path
              id="1"
              d="m306.99-141.25a99.687 99.69 0 0 0-35.297 35.307c0.0413 0.35251 0.081 0.70176 0.12661 1.0609l27.693 15.989a67.067 67.069 0 0 1 24.548-24.548l-15.989-27.695c-0.36152-0.04-0.72122-0.076-1.0816-0.11421z"
            />
            <path
              id="2"
              d="m356.35-155.04a99.687 99.69 0 0 0-47.891 12.946c-0.12789 0.31618-0.25511 0.63462-0.37983 0.95912l15.989 27.695a67.067 67.069 0 0 1 33.532-8.9855v-31.979c-0.41969-0.21982-0.83384-0.42545-1.25-0.63613z"
            />
            <path
              id="3"
              d="m359.32-155.03c-0.56991 0.20376-1.1411 0.41018-1.7182 0.62941v31.979a67.067 67.069 0 0 1 1e-3 0 67.067 67.069 0 0 1 33.532 8.9845l15.988-27.694c-0.19363-0.3661-0.39096-0.72374-0.59015-1.078a99.687 99.69 0 0 0-47.213-12.821z"
            />
            <path
              id="4"
              d="m407.12-141.13-15.988 27.694a67.067 67.069 0 0 1 24.548 24.548l27.692-15.989c0.10002-0.26642 0.1913-0.52619 0.28628-0.78858a99.687 99.69 0 0 0-35.09-35.362c-0.48239-0.0345-0.9641-0.0705-1.4485-0.10335z"
            />
            <path
              id="5"
              d="m443.37-104.88-27.692 15.989a67.067 67.069 0 0 1 8.9865 33.534h31.975c0.21865-0.17661 0.42923-0.35213 0.64285-0.52813a99.687 99.69 0 0 0-12.916-48.552c-0.3302-0.14803-0.66007-0.29604-0.9958-0.44339z"
            />
            <path
              id="6"
              d="m424.66-55.357a67.067 67.069 0 0 1 0 0.0021 67.067 67.069 0 0 1-8.985 33.533l27.691 15.988c0.34555-0.16356 0.68411-0.33074 1.0253-0.49661a99.687 99.69 0 0 0 12.882-48.012c-0.20987-0.33651-0.41998-0.67327-0.63872-1.0144z"
            />
            <path
              id="7"
              d="m415.68-21.822a67.067 67.069 0 0 1-24.548 24.55l15.987 27.691c0.39321 0.024 0.78175 0.04396 1.1689 0.06356a99.687 99.69 0 0 0 35.316-35.436c-0.0758-0.29291-0.15131-0.58505-0.23203-0.8816z"
            />
            <path
              id="8"
              d="m391.13 2.7279a67.067 67.069 0 0 1-33.533 8.986 67.067 67.069 0 0 1-1e-3 0v31.975c0.37896 0.21824 0.75414 0.4293 1.1276 0.63768a99.687 99.69 0 0 0 47.901-12.884c0.16465-0.34018 0.33034-0.67764 0.49196-1.0232z"
            />
            <path
              id="9"
              d="m324.06 2.7274-15.987 27.692c0.15946 0.34302 0.32006 0.68109 0.48163 1.0165a99.687 99.69 0 0 0 48.141 12.893c0.2986-0.21001 0.59787-0.42237 0.89865-0.64027v-31.975a67.067 67.069 0 0 1-33.534-8.9865z"
            />
            <path
              id="10"
              d="m299.52-21.823-27.692 15.989c-0.0828 0.29395-0.15946 0.58328-0.23719 0.87333a99.687 99.69 0 0 0 35.304 35.434c0.39265-0.0161 0.78673-0.03334 1.1849-0.05375l15.987-27.692a67.067 67.069 0 0 1-24.547-24.55z"
            />
            <path
              id="11"
              d="m258.55-55.357c-0.21328 0.37176-0.42449 0.74343-0.63769 1.1152a99.687 99.69 0 0 0 12.922 47.982c0.32648 0.14201 0.64983 0.28445 0.98495 0.42581l27.692-15.989a67.067 67.069 0 0 1-8.9845-33.532 67.067 67.069 0 0 1 0-0.0021z"
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default SunDiagram;
