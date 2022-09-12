import React, { useState, Fragment} from 'react'

const App = () => {
  const [number, setNumber] = useState(0);

  let imgGallery = {
    0: './img/23d4c6e88a98023533b13bfd97bf1d4f.jpeg',
    1: './img/6661e1bc733eb2147276b7cad6d2e367.jpeg',
    2: './img/84557d25e597de3dc103fa26abf9b752.jpeg',
    3: './img/a8c41d4a48db08e83547a34127a03174.jpeg',
    4: './img/d1eb02e9527c9324ecba43346b644300.jpeg',
    5: './img/da2faa2655680fb8a46cd801b2a4549e.jpeg',
  }


  return (
    <div style={{textAlign: 'center'}}>
      <button> - </button>
      <img src={imgGallery[2]}></img>
      <button> + </button> <br/>
      <input type="radio" name="page"/>
      <input type="radio" name="page"/>
      <input type="radio" name="page"/>
      <input type="radio" name="page"/>
      <input type="radio" name="page"/>
      <input type="radio" name="page"/>

    </div>
  )
}

export default App