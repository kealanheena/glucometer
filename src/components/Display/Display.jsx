import React from 'react';
import PropTypes from 'prop-types';
import './Display.css'

const Display = ({ displayValue }) => (
  <div className="display-container">
    <div className="display-value">
      { displayValue }
    </div>
  </div>
);

Display.propTypes = { displayValue: PropTypes.any.isRequired };

export default Display;
