import React, { Component } from "react";

class MoonDiagram extends Component {
  handleHover(area) {
    const angle = Number.parseInt(
      (Number.parseFloat(area.id, 10) * 360) / 31,
      10
    );
    console.log(`MOON ANGLE is ${angle}. (id=${area.id})`);
    document.getElementById(
      "moon-rotable"
    ).style.transform = `rotate(${angle}deg)`;
  }

  handleClick(area) {
    document.querySelectorAll(".areas-moon path").forEach((area) => {
      area.classList.remove("active");
    });
    area.classList.add("active");
    const day = Number.parseInt(area.id, 10) + 1;
    this.props.actionFnct(day);
  }

  adjustSize() {
    const calendar = document.querySelector(".calendar");
    const calendarWidth = calendar.getBoundingClientRect().width;
    const diagram = document.querySelector("#moon-diagram");
    diagram.style.width = `${Number.parseInt(calendarWidth * 0.4)}px`;
    diagram.style.height = `${Number.parseInt(calendarWidth * 0.4)}px`;
  }

  componentDidMount() {
    document.querySelectorAll(".areas-moon path").forEach((area) => {
      area.addEventListener("mouseover", (e) => this.handleHover(area));
      area.addEventListener("click", (e) => this.handleClick(area));
    });

    window.addEventListener("resize", this.adjustSize);
    this.adjustSize();
  }

  render() {
    return (
      <div className="diagram" id="moon-diagram">
        <svg id="moon-rotable" viewBox="0 0 200 200">
          <g>
            <circle
              transform="rotate(-36.477)"
              cx="20.96"
              cy="139.86"
              r="99.37"
              fill="none"
              stroke="#ccc"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2592"
            />
            <g>
              <g stroke="#ccc" strokeWidth=".62958">
                <circle
                  transform="rotate(-36.477)"
                  cx="20.96"
                  cy="139.86"
                  r="53.245"
                  fill="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m100 100-51.788-5.574"
                  fill="#ccc"
                  strokeDasharray="0.629579, 1.25915"
                />
                <circle
                  transform="rotate(-36.477)"
                  cx="-17.369"
                  cy="104.59"
                  r="5.8461"
                  fill="#f8f8f8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <circle
                transform="rotate(-36.477)"
                cx="20.96"
                cy="139.86"
                r="10.042"
                fill="#81beff"
                stroke="#b9dbff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7711"
              />
            </g>
            <circle
              transform="rotate(-36.477)"
              cx="20.96"
              cy="139.86"
              r="66.584"
              fill="none"
              stroke="#ccc"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth=".7873"
            />
          </g>
        </svg>

        <svg viewBox="0 0 200 200">
          <g
            fill="#cccccc"
            fontFamily="sans-serif"
            fontSize="7.069px"
            letterSpacing="0px"
          >
            <g strokeWidth=".11088">
              <text transform="rotate(-.76249)" x="13.209093" y="94.197884">
                <tspan
                  x="13.209093"
                  y="94.197884"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  1
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="16.919077" y="77.754463">
                <tspan
                  x="16.919077"
                  y="77.754463"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  2
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="23.843937" y="62.285862">
                <tspan
                  x="23.843937"
                  y="62.285862"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  3
                </tspan>
              </text>
            </g>
            <text
              transform="rotate(-.76249)"
              x="33.765167"
              y="48.575062"
              strokeWidth=".11065"
            >
              <tspan
                x="33.765167"
                y="48.575062"
                fill="#cccccc"
                fontSize="7.069px"
                strokeWidth=".11065"
              >
                4
              </tspan>
            </text>
            <g strokeWidth=".11088">
              <text transform="rotate(-.76249)" x="46.073666" y="37.07642">
                <tspan
                  x="46.073666"
                  y="37.07642"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  5
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="60.569897" y="28.413776">
                <tspan
                  x="60.569897"
                  y="28.413776"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  6
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="76.497574" y="22.798801">
                <tspan
                  x="76.497574"
                  y="22.798801"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  7
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="93.271935" y="20.499577">
                <tspan
                  x="93.271935"
                  y="20.499577"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  8
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="110.16148" y="21.61713">
                <tspan
                  x="110.16148"
                  y="21.61713"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  9
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="123.90833" y="26.09885">
                <tspan
                  x="123.90833"
                  y="26.09885"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  10
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="139.09743" y="33.780109">
                <tspan
                  x="139.09743"
                  y="33.780109"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  11
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="152.1445" y="44.367588">
                <tspan
                  x="152.1445"
                  y="44.367588"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  12
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="162.98224" y="57.296772">
                <tspan
                  x="162.98224"
                  y="57.296772"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  13
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="170.85425" y="72.196663">
                <tspan
                  x="170.85425"
                  y="72.196663"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  14
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="175.7399" y="88.33329">
                <tspan
                  x="175.7399"
                  y="88.33329"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  15
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="177.13013" y="105.19924">
                <tspan
                  x="177.13013"
                  y="105.19924"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  16
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="175.19328" y="121.98649">
                <tspan
                  x="175.19328"
                  y="121.98649"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  17
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="169.87706" y="138.01181">
                <tspan
                  x="169.87706"
                  y="138.01181"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  18
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="161.47643" y="152.65161">
                <tspan
                  x="161.47643"
                  y="152.65161"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  19
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="150.481" y="165.29271">
                <tspan
                  x="150.481"
                  y="165.29271"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  20
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="137.11115" y="175.47624">
                <tspan
                  x="137.11115"
                  y="175.47624"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  21
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="121.68883" y="182.67876">
                <tspan
                  x="121.68883"
                  y="182.67876"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  22
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="105.31223" y="186.60536">
                <tspan
                  x="105.31223"
                  y="186.60536"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  23
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="88.339302" y="187.25363">
                <tspan
                  x="88.339302"
                  y="187.25363"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  24
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="71.766418" y="184.38521">
                <tspan
                  x="71.766418"
                  y="184.38521"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  25
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="55.96299" y="178.2758">
                <tspan
                  x="55.96299"
                  y="178.2758"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  26
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="41.801468" y="169.17555">
                <tspan
                  x="41.801468"
                  y="169.17555"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  27
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="29.729877" y="157.29877">
                <tspan
                  x="29.729877"
                  y="157.29877"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  28
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="20.319727" y="143.2934">
                <tspan
                  x="20.319727"
                  y="143.2934"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  29
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="13.959345" y="127.83846">
                <tspan
                  x="13.959345"
                  y="127.83846"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  30
                </tspan>
              </text>
              <text transform="rotate(-.76249)" x="10.88936" y="111.07577">
                <tspan
                  x="10.88936"
                  y="111.07577"
                  fill="#cccccc"
                  fontSize="7.069px"
                  strokeWidth=".11088"
                >
                  31
                </tspan>
              </text>
            </g>
          </g>
        </svg>

        <svg viewBox="0 0 200 200">
          <g className="areas areas-moon" fill="none">
            <path
              id="0"
              d="m2.8444 79.607-2.1084 20.019 32.636 0.11679a66.854 66.854 0 0 1 1.4165-13.452z"
            />
            <path
              id="1"
              d="m8.9396 60.422-6.0952 19.185 31.944 6.6838a66.854 66.854 0 0 1 4.0964-12.892z"
            />
            <path
              id="2"
              d="m18.772 42.856-9.832 17.565 29.945 12.978a66.854 66.854 0 0 1 6.6068-11.803z"
            />
            <path
              id="3"
              d="m31.938 27.629-13.167 15.227 26.72 18.74a66.854 66.854 0 0 1 8.8475-10.232z"
            />
            <path
              id="4"
              d="m47.901 15.365-15.963 12.265 22.401 23.735a66.854 66.854 0 0 1 10.726-8.2414z"
            />
            <path
              id="5"
              d="m66.005 6.5641-18.104 8.8005 17.164 27.759a66.854 66.854 0 0 1 12.165-5.9133z"
            />
            <path
              id="6"
              d="m85.511 1.5887-19.506 4.9754 11.225 30.646a66.854 66.854 0 0 1 13.107-3.3435z"
            />
            <path
              id="7"
              d="m105.62 0.64094-20.108 0.94774 4.8266 32.278a66.854 66.854 0 0 1 9.8873-0.73536 66.854 66.854 0 0 1 3.6241 0.0987z"
            />
            <path
              id="8"
              d="m105.62 0.64094-1.7699 32.589a66.854 66.854 0 0 1 13.363 2.0955l8.2936-31.564z"
            />
            <path
              id="9"
              d="m125.51 3.7606-8.2936 31.564a66.854 66.854 0 0 1 12.668 4.7429l14.478-29.249z"
            />
            <path
              id="10"
              d="m144.36 10.819-14.478 29.249a66.854 66.854 0 0 1 11.454 7.1959l20.069-25.735z"
            />
            <path
              id="11"
              d="m161.4 21.529-20.069 25.735a66.854 66.854 0 0 1 9.771 9.3545l24.838-21.169z"
            />
            <path
              id="12"
              d="m175.94 35.45-24.838 21.169a66.854 66.854 0 0 1 7.6884 11.13l28.59-15.735z"
            />
            <path
              id="13"
              d="m187.38 52.013-28.59 15.735a66.854 66.854 0 0 1 5.2901 12.449l31.172-9.6578z"
            />
            <path
              id="14"
              d="m195.26 70.54-31.172 9.6578a66.854 66.854 0 0 1 2.6758 13.26l32.478-3.1853z"
            />
            <path
              id="15"
              d="m199.24 90.273-32.478 3.1853a66.854 66.854 0 0 1 0.31936 6.5267 66.854 66.854 0 0 1-0.36742 7.0001l32.454 3.4179z"
            />
            <path
              id="16"
              d="m166.71 106.98a66.854 66.854 0 0 1-2.7704 13.241l31.101 9.8805 4.1227-19.703z"
            />
            <path
              id="17"
              d="m163.94 120.23a66.854 66.854 0 0 1-5.379 12.412l28.476 15.939 8.0047-18.47z"
            />
            <path
              id="18"
              d="m158.56 132.64a66.854 66.854 0 0 1-7.767 11.075l24.684 21.344 11.559-16.481z"
            />
            <path
              id="19"
              d="m150.8 143.71a66.854 66.854 0 0 1-9.8382 9.2847l19.882 25.876 14.64-13.817z"
            />
            <path
              id="20"
              d="m140.96 153a66.854 66.854 0 0 1-11.505 7.1143l14.266 29.349 17.121-10.587z"
            />
            <path
              id="21"
              d="m129.45 160.11a66.854 66.854 0 0 1-12.702 4.6524l8.0662 31.62 18.902-6.9236z"
            />
            <path
              id="22"
              d="m116.75 164.76a66.854 66.854 0 0 1-13.379 2.0009l1.5358 32.596 19.909-2.9771z"
            />
            <path
              id="23"
              d="m89.863 166.03-5.0571 32.238 20.101 1.0919-1.5358-32.596a66.854 66.854 0 0 1-3.1461 0.0739 66.854 66.854 0 0 1-10.362-0.8077z"
            />
            <path
              id="24"
              d="m76.78 162.59-11.443 30.561 19.469 5.1154 5.0571-32.238a66.854 66.854 0 0 1-13.083-3.438z"
            />
            <path
              id="25"
              d="m64.657 156.59-17.361 27.632 18.041 8.9297 11.443-30.561a66.854 66.854 0 0 1-12.123-6.0012z"
            />
            <path
              id="26"
              d="m53.99 148.27-22.568 23.572 15.874 12.379 17.361-27.632a66.854 66.854 0 0 1-10.667-8.3184z"
            />
            <path
              id="27"
              d="m45.299 138.1-26.793 18.593 12.916 15.155 22.568-23.572a66.854 66.854 0 0 1-8.6909-10.176z"
            />
            <path
              id="28"
              d="m38.694 126.13-30.036 12.762 9.7059 17.636 26.852-18.547a66.854 66.854 0 0 1-6.5216-11.851z"
            />
            <path
              id="29"
              d="m34.692 113.21-31.991 6.4549 5.9578 19.228 30.036-12.762a66.854 66.854 0 0 1-4.0029-12.921z"
            />
            <path
              id="30"
              d="m0.736 99.627 1.9647 20.034 31.991-6.4549a66.854 66.854 0 0 1-1.3203-13.221 66.854 66.854 0 0 1 5.29e-4 -0.24133z"
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default MoonDiagram;
