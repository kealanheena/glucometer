import React from 'react';
import PropTypes from 'prop-types';

const Keypad = ({ buttons }) => {

  const buttonKeys = buttons.map(button => <p key={button}>{button}</p>);

  return (
    <div className="keypad-container">
      <div className="buttons-container">
        {buttonKeys}
      </div>
    </div>
  );
}

Keypad.propTypes = {
  buttons: PropTypes.array.isRequired,
}

  export default Keypad;