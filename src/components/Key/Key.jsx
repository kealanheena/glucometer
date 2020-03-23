import React from 'react';
import PropTypes from 'prop-types';

const Key = ({ keyAction, keyValue }) => <div className="key-container" />;

Key.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyValue: PropTypes.string.isRequired,
}

export default Key;
