import React, { Component } from 'react';

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
    return (
      <div className="glucometer-container"/>
    )
  }
}

export default Glucometer;
