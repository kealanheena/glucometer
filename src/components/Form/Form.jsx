import React from 'react';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carbs: 0,
      ratio: 0,
    }
  }

  carbsChangeHandler = (e) => {
    this.setState({ carbs: e.target.value });
  }

  ratioChangeHandler = (e) => {
    this.setState({ ratio: e.target.value });
  }

  render(){
    return (
      <form>
        <input 
          type="number"
          min='0'
          max='240'
          onChange={this.carbsChangeHandler}
        />
        <input
          type="number"
          min='0'
          max='55.4'
          onChange={this.ratioChangeHandler}
        />
        <input type="submit"/>
      </form>
    )}
}

export default Form;