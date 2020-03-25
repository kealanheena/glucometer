import React from 'react';
import PropTypes from 'prop-types';
import './Key.css'

const Key = ({ keyAction, keyValue }) => (
  <div 
    className="key-container"
    onClick={() => keyAction()}
  >
    <p className="key-value">
      {keyValue}
    </p>
  </div>
);

Key.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyValue: PropTypes.string.isRequired,
}

export default Key;
