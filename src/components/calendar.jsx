import React, { Component } from "react";

class Calendar extends Component {
  getMessages = () => {
    const { agenda, month, day } = this.props;
    const m = ["", "", "", "", ""];
    if (agenda) {
      let k = 0;
      agenda.filter(
        (x) => x.month === month && x.day === Number.parseInt(day, 10)
      ).forEach((item) => {
        m[k] = item;
        k++;
      });
    }
    return m;
  };

  render() {
    return (
      <div className="calendar">
        <div className="calendar-inside">
          <div className="left-block">
            <p className="month">{this.props.month}</p>
            <p className="day">
              {this.props.day}
              <sup>{this.props.suffix}</sup>
            </p>
          </div>
          <ul className="right-block">
            {this.getMessages().map((item) => {
              return <li key={item.key}>{item.message}</li>;
            })}
          </ul>
          <div className="add-item">+</div>
        </div>
      </div>
    );
  }
}

export default Calendar;
