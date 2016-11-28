import React from 'react';
import './AddBtn.css';
const AddBtn = props => (
  <button className="add-button"
    onClick={() => props.handleAddClick(props.details)}
    >Add</button>
);

export default AddBtn;
