import React, { Component } from 'react';
import './Glucometer.css'
import Display from '../Display/Display';

class Glucometer extends Component {
  state = {
    // value to be displayed in <Display />
    displayValue: 'Welcome to the online carb counter',
    // value to be displayed in the <Keys />
    buttons: ['Get Bolus'],
    // ratio used to calculate your bolus(amount of insulin needed)
    ratio: '',
    // amount of carbs you are eating in grams
    carbs: ''
  }

  calculateBolus = () => {
    console.log('calculateBolus')
  }

  updateDisplay = () => {
    console.log('updateDisplay')
  }

  render = () => {
    // unpack the component state by using Object Destructuring
    const { displayValue } = this.state;
    return (
      <div className="glucometer-container">
        <Display displayValue={displayValue} />
      </div>
    )
  }
}

export default Glucometer;
