import React from 'react';
import './DeleteBtn.css';
const DeleteBtn = props => (
  <button className="add-button"
    onClick={() => props.handleDeleteClick(props.details)}
    >Delete</button>
);

export default DeleteBtn;
