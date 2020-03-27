import React from 'react';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carbs: 0,
    }
  }

  carbsChangeHandler = (e) => {
    this.setState({ carbs: e.target.value });
  }

  render(){
    return (
      <form>
        <input 
          type="number"
          onChange={this.carbsChangeHandler}  
        />
        <input type="number"/>
        <input type="submit"/>
      </form>
    )}
}

export default Form;