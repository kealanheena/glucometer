import React, { Component } from 'react';

class Glucometer extends Component {
  state = {
    // value to be displayed in <Display />
    displayValue: '',
  }

  render = () => {
    return (
      <div className="glucometer-container"/>
    )
  }
}

export default Glucometer;
