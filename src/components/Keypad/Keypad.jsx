import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key/Key';
import './Keypad.css';

const Keypad = ({ 
  buttons, 
  calculateBolus,
}) => {

  const buttonKeys = buttons.map(button => <p key={button}>{button}</p>);

  return (
    <div className="keypad-container">
      <div className="buttons-container">
        {buttonKeys}
      </div>
      <Key 
        keyAction={calculateBolus} 
        keyValue=''
      />
    </div>
  );
}

Keypad.propTypes = {
  buttons: PropTypes.array.isRequired,
}

export default Keypad;