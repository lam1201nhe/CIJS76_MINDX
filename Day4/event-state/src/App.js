import React, {Fragment} from 'react'
import { useState } from 'react'

const App = () => {
  // let number = 10;
  const [number, setNumber] = useState(10);

  const handleIncreaseNumber = () => {
    const num = number + 1;
    setNumber(number + 1);
    console.log('number', num);
  }

  //Hàm có tham số
  const handleIncreaseNumberFunc = (num) => {
    setNumber(number + num);
    console.log('number', num);
  }

  const logger = () => {
    console.log("hello world!");
  }

  return (
    // viết gọn như thế này cũng oke
    <>
    <h1>{number}</h1>
    <button onClick={handleIncreaseNumber}>+1</button>
    {/* Hàm có tham số */}
    <button onClick={() => {
      handleIncreaseNumberFunc(2);
      logger();
      //co the ghi them ham`
      }}>+2</button>

    </>
  )
}

// const Person = () => {
//   const [person, userPerson] = useState({name: "John", age: 24});
// }




export default App