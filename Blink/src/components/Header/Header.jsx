import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
  /* header display render on EACH page of application
    header includes logo & application name */
      <div className="header">
      <h1>Welcome to Blink</h1>
      </div>

    );
  }
}

export default Header;
