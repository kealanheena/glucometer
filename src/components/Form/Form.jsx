import React from 'react';
import PropTypes from 'prop-types';
import Display from '../Display/Display';
import './Form.css'

const Form = ({
  submitHandler,
  carbs,
  ratio,
  carbsChangeHandler,
  ratioChangeHandler,
  displayValue,
}) => (
<form 
  onSubmit={(e) => {
    e.preventDefault();
    submitHandler(carbs, ratio)
  }}
  className="form-container"
>
  <div className="input-container">
    <label>Carbs:
      <input 
        type='number'
        min='0'
        max='240'
        onChange={carbsChangeHandler}
      />
      <em>g</em>
    </label>
    <label>Ratio: 1:
      <input
        type='number'
        min='0'
        max='55.4'
        onChange={ratioChangeHandler}
      />
      <em>mmol</em>
    </label>
  </div>
  <Display displayValue={displayValue}/>
  <input
    className="submit-button"
    type="submit"
  />
  {/* <img className="logo" src="../../../public/glucometer-logo.png" alt="glucometer-logo"/> */}
</form>
)

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  carbs: PropTypes.any.isRequired,
  ratio: PropTypes.any.isRequired,
  carbsChangeHandler: PropTypes.func.isRequired,
  ratioChangeHandler: PropTypes.func.isRequired,
  displayValue: PropTypes.string.isRequired
}

export default Form;