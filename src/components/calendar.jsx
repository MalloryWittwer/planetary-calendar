import React, { Component } from "react";

class Calendar extends Component {
  getMessage = () => {
    const { agenda, month, day } = this.props;
    console.log("day is ", day);
    if (agenda) {
      const date = agenda.filter(
        (x) => x.month === month && x.day === Number.parseInt(day, 10)
      )[0];
      if (date) {
        return date.message;
      } else {
        return "";
      }
    } else {
      return "";
    }
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
          <div className="right-block">{this.getMessage()}</div>
        </div>
      </div>
    );
  }
}

export default Calendar;
