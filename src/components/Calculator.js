import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [calcObject, setCalcObject] = useState({});

  function handleClick(e) {
    e.preventDefault();
    try {
      setCalcObject({ ...calcObject, ...calculate(calcObject, e.target.textContent) });
    } catch (error) {
      return calcObject;
    }
    return 0;
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calculate-page">
        <h2>Let&apos;s do some Math</h2>
        <div className="calc-container">
          <div className="calc-display">
            {next || total || 0}
          </div>
          <button type="button" onClick={this.handleClick} className="gray-btn">AC</button>
          <button type="button" onClick={this.handleClick} className="gray-btn">+/-</button>
          <button type="button" onClick={this.handleClick} className="gray-btn">%</button>
          <button type="button" onClick={this.handleClick} className="orange-btn">÷</button>
          <button type="button" onClick={this.handleClick} className="gray-btn">7</button>
          <button type="button" onClick={this.handleClick} className="gray-btn">8</button>
          <button type="button" onClick={this.handleClick} className="gray-btn">9</button>
          <button type="button" onClick={this.handleClick} className="orange-btn">x</button>
          <button type="button" onClick={this.handleClick} className="gray-btn">4</button>
          <button type="button" onClick={this.handleClick} className="gray-btn">5</button>
          <button type="button" onClick={this.handleClick} className="gray-btn">6</button>
          <button type="button" onClick={this.handleClick} className="orange-btn">-</button>
          <button type="button" onClick={this.handleClick} className="gray-btn">1</button>
          <button type="button" onClick={this.handleClick} className="gray-btn">2</button>
          <button type="button" onClick={this.handleClick} className="gray-btn">3</button>
          <button type="button" onClick={this.handleClick} className="orange-btn">+</button>
          <button type="button" onClick={this.handleClick} className="gray-btn zero-btn">0</button>
          <button type="button" onClick={this.handleClick} className="gray-btn">.</button>
          <button type="button" onClick={this.handleClick} className="orange-btn">=</button>
        </div>
      </div>
    );
  }

}
export default Calculator;
