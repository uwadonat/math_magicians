import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [calcObject, setCalcObject] = useState({});
}

function handleClick(e) {
  setCalcObject({...calcObject, ...calculate(calcObject, e.target.textContent)});
}

const { next, total } = calcObject;

const buttonNames =[
  'AC', '+/-', '%', '÷', '7', '8', '9', 'x',
  '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
];

const btnClass = (i)
 Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
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
    );
  }
}
export default Calculator;
