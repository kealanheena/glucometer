import React, { Component } from 'react';
import './Glucometer.css'
import Form from '../Form/Form';
// import Display from '../Display/Display';
// import Keypad from '../Keypad/Keypad';

class Glucometer extends Component {
  constructor(props) {
  super(props);
  this.state = {
      // value to be displayed in <Display />
      displayValue: '',
      // ratio used to calculate your bolus(amount of insulin needed)
      ratio: 0,
      // amount of carbs you are eating in grams
      carbs: 0,
    }
    this.updateDisplay = this.updateDisplay.bind(this);
    this.calculateBolus = this.calculateBolus.bind(this);
    // this.calculateBolus = this.calculateBolus.bind(this);
    this.setCarbs = this.setCarbs.bind(this);
  }

  setCarbs = (e) => {
    let { carbs } = this.state
    this.setState({ carbs: e.target.value });
  }

  setRatio = (e) => {
    let { ratio } = this.state
    this.setState({ ratio: e.target.value });
  }

  calculateBolus = (carbs, ratio) => {

    console.log(carbs);
    let units = Math.floor(carbs/ratio);
    this.updateDisplay(units);
  }

  updateDisplay = (bolus) => {
    let { displayValue } = this.state;

    displayValue = `${bolus} units`;
    console.log(displayValue)

    // if (displayValue === 'Infinity units') displayValue = 'ERROR';

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
        />
        <p>{displayValue}</p>
        {/* <Display displayValue={displayValue} />
        <Keypad 
          buttons={buttons}
          calculateBolus={this.calculateBolus}
        /> */}
      </div>
    )
  }
}

export default Glucometer;
