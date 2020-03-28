import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  submitHandler,
  carbs,
  ratio,
  carbsChangeHandler,
  ratioChangeHandler,
}) => (
<form 
  onSubmit={(e) => {
    e.preventDefault();
    submitHandler(carbs, ratio)
  }}
>
  <input 
    type='number'
    min='0'
    max='240'
    onChange={carbsChangeHandler}
  />
  <input
    type='number'
    min='0'
    max='55.4'
    onChange={ratioChangeHandler}
  />
  <input type="submit"/>
</form>
)

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
}

export default Form;