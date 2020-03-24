import React, { Component } from 'react';
import './Glucometer.css'
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

class Glucometer extends Component {
  state = {
    // value to be displayed in <Display />
    displayValue: <div>
                    <p>carbs:
                      <input className="unit-input" type="number" min="0" max="240"/><em className="unit-display">g</em>
                    </p> 
                    <p>1 :
                      <input  className="unit-input" type="number" min="0" max="55.4"/><em className="unit-display">mmol/L</em>
                    </p>
                  </div>,
    // value to be displayed in the <Keys />
    // buttons: ['Get Bolus'],
    // ratio used to calculate your bolus(amount of insulin needed)
    // ratio: '',
    // amount of carbs you are eating in grams
    // carbs: ''
  }

  calculateBolus = () => {
    console.log('calculateBolus');
  }

  updateDisplay = () => {
    console.log('updateDisplay');
  }

  render = () => {
    // unpack the component state by using Object Destructuring
    const { displayValue, buttons } = this.state;
    return (
      <div className="glucometer-container">
        <Display displayValue={displayValue} />
        <Keypad buttons={buttons} />
      </div>
    )
  }
}

export default Glucometer;
