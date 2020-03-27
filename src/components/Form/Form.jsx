import React from 'react';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      ratio: 0,
      carbs: 0,
    }
  }

  carbChangeHandler = (event) => {
    this.setState({carbs: event.target.value});
  }

  ratioChangeHandler = (event) => {
    this.setState({ratio: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.props.ratio, this.props.carbs)
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {/* carb input */}
        <input 
          type='number'
          min='0'
          max='240'
          onChange={this.carbChangeHandler}
        />
        <input 
          type='number'
          min='0'
          max='240'
          onChange={this.ratioChangeHandler}
        />
        <input
          type="submit"
        />
      </form>
    )
  }

}

export default Form;