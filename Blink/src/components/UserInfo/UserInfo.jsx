import React, { Component } from 'react';
import './UserInfo.css';

class UserInfo extends Component {
  render() {
    if(this.props.dob === null) {
      return (
        <div className="white-background">
        <div className="user-input-container">

          <input className="age" type="number" placeholder="Enter Age" value={this.props.userAge} onChange={this.props.updateFormAge}/>
          <input className="gender" type="text" placeholder="Enter Gender" value={this.props.userGender} onChange={this.props.updateFormGender}/>
          <input className="dob" type="date" value={this.props.userDOB} onChange={this.props.updateFormDOB} />

          <button className="add-info"
            onClick={this.props.handleDOBSubmit}
            > Add My Info </button>
          </div>
          </div>
        );

    } else {
      return null
    }
  }
}

export default UserInfo;
