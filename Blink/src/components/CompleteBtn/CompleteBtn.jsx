import React from 'react';
import './CompleteBtn.css';
const CompleteBtn = props => (
  <button className="add-button"
    onClick={() => props.handleCompleteClick(props.details)}
    >Complete!</button>
);

export default CompleteBtn;
