import React, { Component } from "react";

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-inside">
          <div className="left-block">
            <p className="month">{this.props.month}</p>
            <p className="day">{this.props.day}</p>
          </div>
          <div className="right-block"></div>
        </div>
      </div>
    );
  }
}

export default Calendar;
