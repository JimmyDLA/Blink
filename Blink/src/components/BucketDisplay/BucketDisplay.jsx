import React, { Component } from 'react';
import BucketDisplayItems from '../BucketDisplayItems/BucketDisplayItems';
import './BucketDisplay.css';

/* container in which each Bucket List-Saved* Search results will show  */

class BucketDisplay extends Component {
  constructor() {
    super()
    this.state= {
      open: false,
      className: false
    }
  }
  toggle(){
    this.setState({
      open: !this.state.open,
      className: !this.state.className
    })
  }

  render() {
      return (
      <div className={this.state.open}>
        <div className="content">
          <BucketDisplayItems
            handleCompleteClick={this.props.handleCompleteClick}
            handleDeleteClick={this.props.handleDeleteClick}
            bucket={this.props.bucket} />
        </div>
        <div className="transparent">
          <div className="handle" onClick={this.props.handleToggleDrawer}>|||</div>
        </div>
      </div>
      )
    }
  }

export default BucketDisplay;
