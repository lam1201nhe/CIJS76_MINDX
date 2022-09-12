import React from 'react'
import { useState, Fragment } from 'react'

const App = () => {
  
  const [number, setNumber] = useState(10);
  const resetNumber = () => {
    setNumber(0);
  }
  const decreaseNumber = () => {
    if(number === 0) {
      setNumber(0);
    } else {
    setNumber(number - 1);
  }
}
  const increaseNumber = () => {
    if(number === 10){
      setNumber(10);
    } else {
    setNumber(number + 1);
  }
}
const changeNumber = (event) => {
  const data = event.target.value;
  data<0 ? setNumber(0) : data>10 ? setNumber(10) : setNumber(data); 
}

  return (
    <div style={{textAlign: 'center'}}>
      <input type="number" placeholder="Enter your number..." onChange={changeNumber}/>
      <button onClick={resetNumber}>Reset</button><br/>
      <button onClick={decreaseNumber}>-</button>
      <span>{number}</span>
      <button onClick={increaseNumber}>+</button>

    </div>
  )
};
export default App;