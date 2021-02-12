import React from 'react';

import './Calculator.scss';

class Calculator extends React.Component {
  state = {
    input: 0,
    sum: 0,
  }

  numOnChange = (e) => {
    const newNum = e.target.value;
    this.setState({ input: newNum });
  }

  pressedEnter = (e) => {
    const sum = this.input * 10;
    this.setState({ sum });
  }

  render() {
    const { sum } = this.state;

    return (
      <div className="Calculator d-flex justify-content-center mb-5">
        <input type="number" className="form-inline" id="new-number" onChange={this.numOnChange}></input>
        <button className="btn btn-danger" onClick={this.pressedEnter}>Enter</button>
        <p className="ml-5 mt-2 font-weight-bold">{sum}</p>
      </div>
    );
  }
}

export default Calculator;
