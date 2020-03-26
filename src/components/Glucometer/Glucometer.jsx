import React, { Component } from 'react';
import './Glucometer.css'
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

class Glucometer extends Component {
  constructor(props) {
  super(props);
  this.state = {
      // value to be displayed in <Display />
      displayValue: <div>
                      <p>carbs:</p> 
                      <input className="unit-input" type="number" min="0" max="240"/>
                      <em className="unit-display">g</em>
                      <p>1 u :</p>
                      <input  className="unit-input" type="number" min="0" max="55.4"/>
                      <em className="unit-display">mmol/L</em>
                    </div>,
      // value to be displayed in the <Keys />
      buttons: ['Get Bolus'],
      // ratio used to calculate your bolus(amount of insulin needed)
      // ratio: '',
      // amount of carbs you are eating in grams
      // carbs: ''
    }
    this.updateDisplay = this.updateDisplay.bind(this);
  }
  calculateBolus = (carbs, ratio) => {
    let units = carbs/ratio
    this.updateDisplay(units)
  }

  updateDisplay = (bolus) => {
    let { displayValue } = this.state;
    displayValue = `${bolus} units`;
    this.setState({ displayValue });
  }

  render = () => {
    // unpack the component state by using Object Destructuring
    const { displayValue, buttons } = this.state;
    return (
      <div className="glucometer-container">
        <Display displayValue={displayValue} />
        <Keypad 
          buttons={buttons}
          calculateBolus={this.calculateBolus}
        />
      </div>
    )
  }
}

export default Glucometer;
