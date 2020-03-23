import React from 'react';
import PropTypes from 'prop-types';

const Keypad = ({ buttons }) => 
  <div className="keypad-container"/>;

  Keypad.propTypes = {
    buttons: PropTypes.array.isRequired,
  }

  export default Keypad;