import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
  /* header display render on EACH page of application
    header includes logo & application name */

      <div className="header">
           <style>
                  @import url('https://fonts.googleapis.com/css?family=Baloo+Bhaina|Open+Sans');
           </style>
      <div className="logo"></div>
      <div className="logo-text"> Blink <span className="tag-line">Conquer your bucket list</span></div>
        <div className="user-icon">
          <img src={this.props.userProfile} className="user-photo" alt="user"/>
            <span className="user-name">{this.props.userName}</span>
            </div>
      </div>

    );
  }
}

export default Header;
