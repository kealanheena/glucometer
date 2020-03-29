import React, { Component } from 'react';
import './Glucometer.css'
import Form from '../Form/Form';

class Glucometer extends Component {
  constructor(props) {
  super(props);
  this.state = {
      // value to be displayed in <Display />
      displayValue: '',
      // ratio used to calculate your bolus(amount of insulin needed)
      ratio: '0',
      // amount of carbs you are eating in grams
      carbs: '0',
    }
  }

  setCarbs = (e) => {
    // sets state of carbs when change is made to input
    this.setState({ carbs: e.target.value });
  }

  setRatio = (e) => {
    // sets state of ratio when change is made to input
    this.setState({ ratio: e.target.value });
  }

  calculateBolus = (carbs, ratio) => {
    let units = Math.floor(carbs/ratio);

    this.updateDisplay(units);
  }

  updateDisplay = (bolus) => {
    let { displayValue } = this.state;

    displayValue = `${bolus} units`;

    if (displayValue === 'Infinity units' || displayValue === 'NaN units') displayValue = 'ERROR';

    this.setState({ displayValue });
  }

  render = () => {
    // unpack the component state by using Object Destructuring
    const { displayValue, carbs, ratio } = this.state;
    return (
      <div className="glucometer-container">
        <Form
          submitHandler={this.calculateBolus}
          carbs={carbs}
          ratio={ratio}
          carbsChangeHandler={this.setCarbs}
          ratioChangeHandler={this.setRatio}
          displayValue={displayValue} 
        />
      </div>
    )
  }
}

export default Glucometer;
