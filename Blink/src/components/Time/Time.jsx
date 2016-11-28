import React, { Component } from 'react';
import './Time.css';

class Time extends Component {
  render() {
    return (
      <div className="timeContainer">
        <div>Time to DIE!!!</div>
        <div>{this.props.death}</div>
        <button
          className="deathTime"
          >click me</button>
      </div>
      /* function and display to take birthday information and insert
      into population API which then results in the life expentancy result....
      function refers to stopwatch application. once API is hit
      decrease in format yyyy:mm:dd:hh:mm:ss
       */

    );
  }
}

export default Time;
