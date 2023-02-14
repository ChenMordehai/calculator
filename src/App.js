import logo from './logo.jpg';
import './App.css';
import React, { useState } from 'react';



function App() {

  // values
  const [previousOperand, setPreviousOperand] = useState('');
  const [currentOperand, setCurrentOperand] = useState('');
  const [operation, setOperation] = useState('');


  // handle number button click
  const handleNumberClick = num => {
    // check if currentOperand has more then 1 dot
    if (currentOperand.includes('.') && num ==='.'){
      window.alert("Oops! please enter a valid number");
      return;
    }
    // update currentOperand
    setCurrentOperand(currentOperand+num);
  };

  const handleOperationClick = op =>{
    console.log(currentOperand);
    console.log(previousOperand);
    if (currentOperand ===''){
      return;
    }
    // if (previousOperand !== ''){
    //   console.log("inside if");
    //   handleCalc();
    // }
    setOperation(op);
    console.log(op);
    console.log(currentOperand);
    setPreviousOperand(currentOperand);
    setCurrentOperand('');
  };



  // calculate
  const handleCalc = () => {
    const num_curr = parseFloat(currentOperand);
    const num_prev = parseFloat(previousOperand);
    if (isNaN(num_curr) || isNaN(num_prev)){
      return;
    }
    let ans;
    console.log(previousOperand,operation,currentOperand);
    switch(operation){
      case '/':
        if (num_curr === 0.0){
          window.alert("Oops! dividing by zero is not allowed");
          return;
        }
        ans = num_prev / num_curr;
        break
      case '*':
        ans = num_prev * num_curr;
        break
      case '+':
        ans = num_prev + num_curr;
        break
      case '-':
        ans = num_prev - num_curr;
        break
      default:
        return;
    }
    setCurrentOperand(ans.toString());
    setPreviousOperand('');
    setOperation('');
  };

  const clearAll = () => {
    setCurrentOperand('');
    setPreviousOperand('');
    setOperation('');
  };

  const handleDelete = () =>{
    let temp = currentOperand.toString();
    setCurrentOperand(temp.slice(0,-1));
  };

  const handleKeyPress = event => {
    //console.log(event.key);
    if (event.key >= '0' && event.key <= '9') {
      handleNumberClick(event.key);
    } 
    else if(event.key === '.'){
      handleNumberClick(event.key);
    }
    else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
      handleOperationClick(event.key);
    } 
    else if (event.key ==='Delete' || event.key ==='Backspace'){
      handleDelete();
    }
    else if (event.key === 'Enter' || event.key === '=') {
      handleCalc();
    }
  };

  return (
    //onKeyDown={handleKeyPress} tabIndex="0"
    <div className="App" onKeyDown={handleKeyPress} tabIndex="0">

      <header className="App-header">
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <div class="info">
        <p>Start calcutaing by pressing buttons on screen or on keyboard</p>
        </div>
      </header>
      <body className='App-body'>
      <div class="calculator-grid">
      <div class="output">
    <div class="previous-operand">{previousOperand}{operation}</div>
    <div class="current-operand">{currentOperand}</div>
    </div>
    <button class="bigButton" onClick={clearAll}>AC</button>
    <button onClick={handleDelete}>DEL</button>
    <button onClick={()=>handleOperationClick('/')}>÷</button>
    <button onClick={()=>handleNumberClick('1')}>1</button>
    <button onClick={()=>handleNumberClick('2')}>2</button>
    <button onClick={()=>handleNumberClick('3')}>3</button>
    <button onClick={()=>handleOperationClick('*')}>*</button>
    <button onClick={()=>handleNumberClick('4')}>4</button>
    <button onClick={()=>handleNumberClick('5')}>5</button>
    <button onClick={()=>handleNumberClick('6')}>6</button>
    <button onClick={()=>handleOperationClick('+')}>+</button>
    <button onClick={()=>handleNumberClick('7')}>7</button>
    <button onClick={()=>handleNumberClick('8')}>8</button>
    <button onClick={()=>handleNumberClick('9')}>9</button>
    <button onClick={()=>handleOperationClick('-')}>-</button>
    <button onClick={()=>handleNumberClick('.')}>.</button>
    <button onClick={()=>handleNumberClick('0')}>0</button>
    <button class="bigButton" onClick={handleCalc}>=</button>
      </div>
      </body>
      <footer class="App-footer"> &copy; All Rights Reserved, Chen Mordehai 2023 </footer>
    </div>
  );
}

export default App;
